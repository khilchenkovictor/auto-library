import { useState } from 'react';
import clsx from 'clsx';
import { FcGoogle } from "react-icons/fc";
import { FaTelegramPlane } from "react-icons/fa";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import './auth-form.scss';

function AuthForm() {

    const [isRegister, setIsRegister] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    function toggleForm() {
        setIsRegister((prev) => !prev);
    };

    function togglePassword() {
        setIsVisible((prev) => !prev);
    };

    const enterButtonClass = clsx('auth__enter', { 'active': !isRegister });
    const registerButtonClass = clsx('auth__registr', { 'active': isRegister });

    return (
        <div className='container auth'>
            <div className='content auth__content'>
                <form className='auth__form'>

                    <div className='auth__switch'>
                        <button 
                            className={enterButtonClass}
                            type='button'
                            id='enter'
                            onClick={toggleForm}
                        >
                            Вход
                        </button>
                        <button 
                            className={registerButtonClass}
                            type='button'
                            id='registr'
                            onClick={toggleForm}
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
                                    placeholder='Имя'
                                />
                                <input 
                                    className='auth__username' 
                                    type='text' 
                                    placeholder='Username'
                                />
                            </>
                        )}
                        <input 
                            className='auth__email' 
                            type='email' 
                            placeholder='Почта'
                        />
                        <div className='auth__input-container'>
                            <input
                                className='auth__password'
                                type={isVisible ? 'text' : 'password'}
                                placeholder='Пароль'
                            />

                            <button
                                className='auth__eye'
                                type='button'
                                onClick={togglePassword}
                            >
                                {isVisible ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                        {isRegister && (
                            <div className='auth__input-container'>
                                <input
                                    className='auth__password'
                                    type={isVisible ? 'text' : 'password'}
                                    placeholder='Подтвердите пароль'
                                />

                                <button 
                                    className='auth__eye'
                                    type='button'
                                    onClick={togglePassword}
                                >
                                    {isVisible ? <FiEyeOff /> : <FiEye />}
                                </button>
                            </div>
                        )}
                        <button 
                            className='auth__submit' 
                            id='submit' 
                            type='button'
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