import { CiSearch } from "react-icons/ci";
import './hero.scss';

function Hero() {

    return(
        <div className='container hero'>
            <div className='content hero__content'>
                <div className='hero__bg'>
                    <div className='hero__search'>
                        <CiSearch 
                            className='hero__input-icon'
                        />
                        <input 
                            className='hero__input' 
                            id='search'
                            placeholder="Поиск по разделам..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;