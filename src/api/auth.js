import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

const NO_REFRESH = [
    '/auth/login',
    '/auth/register',
    '/auth/refresh',
    '/auth/logout',
];

let refreshPromise = null;

function toError(err) {
    const error = new Error(
        err.response?.data?.message || err.message || 'Ошибка запроса'
    );
    error.status = err.response?.status;
    error.fields = err.response?.data?.errors;
    return error;
}

function refreshSession() {
    if (!refreshPromise) {
        const refresh = () =>
            api.post('/auth/refresh');

        refreshPromise = (
            typeof navigator !== 'undefined' && navigator.locks
                ? navigator.locks.request('auth-refresh', refresh)
                : refresh()
        ).finally(() => {
            refreshPromise = null;
        });
    }

    return refreshPromise;
}

async function request(url, config = {}, isRetry = false) {
    try {
        const response = await api.request({
            ...config,
            url,
        });

        return response.data;
    } catch (err) {
        const status = err.response?.status;

        if (
            status === 401 &&
            !isRetry &&
            !NO_REFRESH.includes(url)
        ) {
            try { 
                await refreshSession();
            } catch (refreshErr) {
                throw toError(refreshErr);
            }
            return request(url, config, true);
        }
        throw toError(err);
    }
}

export const authApi = {
    register: (body) =>
        request('/auth/register', {
            method: 'POST',
            data: body,
        }),

    login: (body) =>
        request('/auth/login', {
            method: 'POST',
            data: body,
        }),

    logout: () =>
        request('/auth/logout', {
            method: 'POST',
        }),

    me: () =>
        request('/auth/me'),
};