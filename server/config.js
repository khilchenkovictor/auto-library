import 'dotenv/config';

const required = ['DATABASE_URL', 'JWT_ACCESS_SECRET', 'CLIENT_URL'];
for (const key of required) {
    if (!process.env[key]) throw new Error(`Missing env variable: ${key}`);
}

export const config = {
    port: Number(process.env.PORT) || 3000,
    isProd: process.env.NODE_ENV === 'production',
    clientUrl: process.env.CLIENT_URL,
    jwtAccessSecret: process.env.JWT_ACCESS_SECRET,
    accessTtlMs: 15 * 60 * 1000,
    refreshTtlMs: 30 * 24 * 60 * 60 * 1000,
    bcryptRounds: 12,
};