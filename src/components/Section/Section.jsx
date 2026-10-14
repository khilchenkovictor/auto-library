import './section.scss';
import { GoMegaphone } from "react-icons/go";


function Section() {

    return (
        <section className='section'>
            <div className='section__square'>
                <GoMegaphone className='section__square-icon'/>
            </div>
            <div className='section__text'>
                <h2 className='section__title'>
                    Реклама
                </h2>
                <span className='section__description'>
                    Объявления, услуги, прродажа запчастей, инструментов и оборудования.
                </span>
            </div>
            <div className='section__counter'>
                245 тем
            </div>
            <div className='section__arrow'>
                <div className='section__arrow-icon'></div>
            </div>
        </section>
    );
};

export default Section;