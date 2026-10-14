import { BiUser } from "react-icons/bi";
import { FaRegMoon } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
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
                    <h1 className='header__title'>АвтоТехДовідник</h1>
                </div>

                <nav className='header__menu'>
                    <ul className='header__menu-list'>
                        <li className='header__menu-item'>
                            <a className='header__menu-link'>Головна</a>
                        </li>
                        <li className='header__menu-item'>
                            <a className='header__menu-link'>Форум</a>
                        </li>
                    </ul>
                </nav>

                <div className='header__buttons'>
                    <div className='header__themes'>
                        <FaRegMoon />
                    </div>
                    <button className='header__auth'>
                        <BiUser className="header__auth-icon"/>
                        <span className='header__auth-text'>Вхід / Реєстрація</span>
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Header;