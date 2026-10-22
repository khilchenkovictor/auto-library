import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { BiUser } from "react-icons/bi";
import { FiSun } from "react-icons/fi";
import { FaRegMoon, FaBusAlt } from "react-icons/fa";
import { Link } from 'react-router';
import './header.scss';

function getSavedTheme() {
    return localStorage.getItem('theme') || 'light';
}

function Header() {

    const [theme, setTheme] = useState(getSavedTheme);

    const { user } = useAuth();

    function toogleTheme() {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <header className='container header'>
            <div className='content header__content'>
                <div className='header__logo'>
                    <div className='header__bg'>
                        <FaBusAlt 
                            className='header__bg-icon'
                        />
                    </div>
                    <h1 className='header__title'>АвтоТехСправочник</h1>
                </div>

                <nav className='header__menu'>
                    <ul className='header__menu-list'>
                        <li className='header__menu-item'>
                            <Link to='/' className='header__menu-link'>Главная</Link>
                        </li>
                        <li className='header__menu-item'>
                            <Link to='/forum' className='header__menu-link'>Форум</Link>
                        </li>
                    </ul>
                </nav>

                <div className='header__buttons'>
                    <button 
                        className='header__themes'
                        onClick={toogleTheme}

                    >
                        {theme === 'light' ? <FaRegMoon /> : <FiSun />}
                    </button>
                    
                    {user ? (
                        <Link to='/profile' className='header__auth'>
                            <BiUser className="header__auth-icon"/>
                            <span className='header__auth-text'>{user.name}</span>
                        </Link>
                    ) : (
                        <Link to='/auth' className='header__auth'>
                            <BiUser className="header__auth-icon" />
                            <span className='header__auth-text'>Вход / Регистрация</span>
                        </Link>
                    )}
                </div>

            </div>
        </header>
    );
};

export default Header;