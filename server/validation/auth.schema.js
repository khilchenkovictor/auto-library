import { z } from 'zod';

const name = z
    .string()
    .trim()
    .min(1, 'Минимум 1 символ')
    .max(50, 'Максимум 50 символов')

const email = z
    .string()
    .trim()
    .toLowerCase()
    .min(5, 'Введите почту')
    .max(254, 'Почта не может превышать 254 символа')
    .email('Некорректная почта')

const password = z
    .string()
    .min(8, 'Минимум 8 символов')
    .max(32, 'Максимум 32 символа')
    .regex(/[a-z]/, 'Пароль должен содержать хотя бы одну маленькую букву')
    .regex(/[A-Z]/, 'Пароль должен содержать хотя бы одну большую букву')
    .regex(/^[^а-яА-ЯёЁ]*$/, 'Пароль не должен содержать кириллицу')

const username = z
    .string()
    .trim()
    .min(3, 'Минимум 3 символа')
    .max(20, 'Максимум 20 символов')
    .regex(/^[a-zA-Z0-9_]+$/, 'Только латиница, цифры и _')

const confirm = z
    .string()
    .min(1, 'Подтвердите пароль')

export const loginSchema = z
    .object({
        email,
        password,
    })

export const registerSchema = z
    .object({
        name,
        username,
        email,
        password
    })