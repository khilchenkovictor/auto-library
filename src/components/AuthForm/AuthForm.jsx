import { FcGoogle } from "react-icons/fc";
import { FaTelegramPlane } from "react-icons/fa";
import './auth-form.scss';

function AuthForm() {

    return (
        <div className='container auth'>
            <div className='content auth__content'>
                <form className='auth__form'>

                    <div className='auth__switch'>
                        <button className='auth__enter' type="button" id='enter'>
                            Вход
                        </button>
                        <button className='auth__registr' type="button" id='registr'>
                            Регистрация
                        </button>
                    </div>

                    <div className='auth__input'>
                        <input className='auth__email' type='email' placeholder='Почта'/>
                        <input className='auth__password' type='password' placeholder='Пароль' />
                        <button className='auth__submit' id='submit' type='submit'>
                            Войти
                        </button>
                    </div>

                    <div className='auth__or'>
                        <span className='auth__or-text'>или</span>
                    </div>

                    <div className='auth__alternative' type="button">
                        <button className='auth__google'>
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