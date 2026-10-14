import { BiUser } from "react-icons/bi";
import { FaRegMoon } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { Link } from 'react-router';
import './header.scss';

function Header() {


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
                    <div className='header__themes'>
                        <FaRegMoon />
                    </div>
                    <Link to='/auth' className='header__auth'>
                        <BiUser className="header__auth-icon"/>
                        <span className='header__auth-text'>Вход / Регистрация</span>
                    </Link>
                </div>

            </div>
        </header>
    );
};

export default Header;