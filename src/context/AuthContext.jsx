import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { authApi } from '../api/auth';

const AuthContext = createContext(null);

export function useAuth() {
    const ctx = useContext(AuthContext);
    return ctx;
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const loadUser = useCallback(async () => {
        try {
            const data = await authApi.me();
            setUser(data.user);
        } catch (err) {
            if (err.status === 401) setUser(null);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        loadUser();
    }, [loadUser]);

    async function login(body) {
        const data = await authApi.login(body);
        setUser(data.user);
    }

    async function register(body) {
        const data = await authApi.register(body);
        setUser(data.user);
    }

    async function logout() {
        try {
            await authApi.logout();
        } finally {
            setUser(null);
        }
    }

    return (
        <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

