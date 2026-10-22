import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, registerSchema } from './schema';
import clsx from 'clsx';
import { FcGoogle } from "react-icons/fc";
import { FaTelegramPlane } from "react-icons/fa";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import './auth-form.scss';

import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';

function AuthForm() {

    const [isRegister, setIsRegister] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const { login, register: registerUser } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(isRegister ? registerSchema : loginSchema),
        defaultValues: { name: '', username: '', email: '', password: '', confirm: '' },
    })

    function toggleForm(nextIsRegister) {
        if (nextIsRegister === isRegister) return;
        setIsRegister(nextIsRegister);
        reset();
    };

    function togglePassword() {
        setIsVisible((prev) => !prev);
    };

    async function onSubmit(data) {
        try {
            if (isRegister) {
                const { confirm, ...body} = data;
                await registerUser(body);
            } else {
                await login({ email: data.email, password: data.password });
            }
            navigate('/profile');
        } catch (err) {
            if (err.fields) {
                Object.entries(err.fields).forEach(([field, messages]) => {
                    setError(field, { message: messages[0] });
                });
            } else {
                setError('root', { message: err.message });
            }
        }
    }

    const enterButtonClass = clsx('auth__enter', { 'active': !isRegister });
    const registerButtonClass = clsx('auth__registr', { 'active': isRegister });

    return (
        <div className='container auth'>
            <div className='content auth__content'>
                <form 
                    className='auth__form'
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate    
                >

                    <div className='auth__switch'>
                        <button 
                            className={enterButtonClass}
                            type='button'
                            id='enter'
                            onClick={() => toggleForm(false)}
                        >
                            Вход
                        </button>
                        <button 
                            className={registerButtonClass}
                            type='button'
                            id='registr'
                            onClick={() => toggleForm(true)}
                        >
                            Регистрация
                        </button>
                    </div>

                    <div className='auth__input'>
                        {isRegister && (
                            <>
                                <input
                                    className='auth__name'
                                    type='text'
                                    autoComplete='name'
                                    placeholder='Имя'
                                    {...register('name')}
                                />
                                {errors.name && <p className='auth__error'>{errors.name.message}</p>}

                                <input 
                                    className='auth__username' 
                                    type='text' 
                                    placeholder='Username'
                                    autoComplete='username'
                                    {...register('username')}
                                />
                                {errors.username && <p className='auth__error'>{errors.username.message}</p>}
                            </>
                        )}
                        <input 
                            className='auth__email' 
                            type='email' 
                            placeholder='Почта'
                            autoComplete='email'
                            {...register('email')}
                        />
                        {errors.email && <p className='auth__error'>{errors.email.message}</p>}
                        <div className='auth__input-container'>
                            <input
                                className='auth__password'
                                type={isVisible ? 'text' : 'password'}
                                placeholder='Пароль'
                                autoComplete={isRegister ? 'new-password' : 'current-password'}
                                {...register('password')}
                            />

                            <button
                                className='auth__eye'
                                type='button'
                                onClick={togglePassword}
                            >
                                {isVisible ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                        {errors.password && <p className='auth__error'>{errors.password.message}</p>}

                        {isRegister && (
                            <>
                                <div className='auth__input-container'>
                                    <input
                                        className='auth__password'
                                        type={isVisible ? 'text' : 'password'}
                                        placeholder='Подтвердите пароль'
                                        autoComplete='new-password'
                                        {...register('confirm')}
                                    />

                                    <button 
                                        className='auth__eye'
                                        type='button'
                                        onClick={togglePassword}
                                    >
                                        {isVisible ? <FiEyeOff /> : <FiEye />}
                                    </button>
                                </div>
                                {errors.confirm && <p className='auth__error'>{errors.confirm.message}</p>}
                            </>
                        )}
                        {errors.root && <p className='auth__error'>{errors.root.message}</p>}
                        <button 
                            className='auth__submit' 
                            id='submit' 
                            type='submit'
                        >
                            {isRegister ? 'Зарегистрироваться' : 'Войти'}
                        </button>
                    </div>

                    <div className='auth__or'>
                        <span className='auth__or-text'>или</span>
                    </div>

                    <div className='auth__alternative'>
                        <button className='auth__google' type='button'>
                            <FcGoogle />
                        </button>
                        <button className='auth__telegram' type="button">
                            <FaTelegramPlane />
                        </button>
                    </div>

                    <a href='#' className='auth__forget'>
                        Забыли пароль?
                    </a>
                </form>
            </div>
        </div>
    );
};

export default AuthForm;