import { FaTelegramPlane } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import './footer.scss';

function Footer() {

    const actualYear = new Date().getFullYear();

    return(
        <footer className='container footer'>
            <div className='content footer__content'>
                <div className='footer__links'>
                    <ul className='footer__info'>
                        <li className='footer__item'>
                            <a href='https://t.me/+PXxl7vVqm6FmNTRi' className='footer__link'>
                                <FaTelegramPlane />
                                <span className='footer__text'>Чат сообщества</span>
                            </a>
                        </li>
                        <li className='footer__item'>
                            <a href='https://t.me/Sokolik7777777' className='footer__link'>
                                <BsChat />
                                <span className='footer__text'>Админ</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <p className='footer__rights'>
                    &copy; {actualYear} Все права защищены.
                </p>
            </div>
        </footer>
    );
};

export default Footer;