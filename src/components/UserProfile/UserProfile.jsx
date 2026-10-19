import { VscKey } from "react-icons/vsc";
import './user-profile.scss';

function UserProfile() {

    return(
        <div className='container profile'>
            <div className='content profile__content'>
                <div className='profile__top'>
                    <button className='profile__edit'></button>

                    <div className='profile__info'>
                        <img className='profile__photo' />
                        <div className='profile__text'>
                            <h3 className='profile__name'></h3>
                            <p className='profile__username'></p>
                            <p className='profile__email'></p>
                        </div>
                    </div>
                    
                    <div className='profile__middle'>

                        <div>
                            <span className='profile__access'>
                                Доступ к материалам
                            </span>
                            <span className='profile__status'>
                                Не оплачено
                            </span>
                        </div>

                        <div>
                            <div className='profile__search'>
                                <VscKey 
                                    className='profile__input-icon'
                                />
                                <input 
                                    className='profile__input' 
                                    placeholder='Ключ активации'
                                />
                            </div>
                            <button className='profile__activate'>
                                Активировать
                            </button>
                        </div>

                        <div className='profile__bottom'>
                            <button className='profile__buy'>
                                Запросить доступ
                            </button>
                            <button className='profile__logout'>
                                Выйти
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default UserProfile;