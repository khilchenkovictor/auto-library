import { VscKey } from "react-icons/vsc";
import { FiCamera } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { FaTelegramPlane } from "react-icons/fa";
import './user-profile.scss';

function UserProfile() {

    return(
        <div className='container profile'>
            <div className='content profile__content'>
                <div className='profile__block'>
                    <div className='profile__top'>
                        <button className='profile__edit'>
                            <LuPencil 
                                className='profile__edit-icon'
                            />
                        </button>

                        <div className='profile__header'>
                            <button className='profile__photo'>
                                    <FiCamera 
                                        className='profile__img'
                                    />
                            </button>
                            <h2 className='profile__title'>Личный кабинет</h2>
                        </div>

                        <div className='profile__text'>
                            <span className='profile__label'>Имя</span>
                            <span className='profile__value'>Виктор</span>
                        </div>

                        <div className='profile__text'>
                            <span className='profile__label'>Username</span>
                            <span className='profile__value'>ybsfdsdfs</span>
                        </div>

                        <div className='profile__text'>
                            <span className='profile__label'>Почта</span>
                            <span className='profile__value'>totall.unplay@gmail.com</span>
                        </div>

                        <div className='profile__text'>
                            <span className='profile__label'>Дата регистрации</span>
                            <span className='profile__value'>20 октября 2026 г.</span>
                        </div>
                        
                        <div className='profile__middle'>

                            <div className='profile__key'>
                                <div className='profile__input-container'>
                                    <VscKey 
                                        className='profile__input-icon'
                                    />
                                    <input 
                                        className='profile__input' 
                                        placeholder='Ключ активации'
                                    />
                                </div>
                                <button 
                                    className='profile__activate'
                                >
                                    Активировать
                                </button>
                            </div>

                            <div className='profile__materials'>
                                <span className='profile__description'>
                                    Для получения доступа к материалам обратитесь к администратору по кнопке ниже
                                </span>
                                <button className='profile__access'>
                                    <FaTelegramPlane 
                                        className='profile__access-icon'
                                    />
                                    <span className='profile__access-text'>Запросить доступ</span>
                                </button>
                            </div>

                            <div className='profile__bottom'>
                                <button className='profile__logout'>
                                    Выйти
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UserProfile;