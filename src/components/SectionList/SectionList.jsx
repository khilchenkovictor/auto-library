import Section from '../Section'
import './section-list.scss';

function SectionList() {

    return (
        <div className='container main'>
            <div className='content main__content'>
                <div className='content main__list'>
                    <Section />
                    <Section />
                    <Section />
                    <Section />
                    <Section />
                    <Section />
                    <Section />
                    <Section />
                </div>
            </div>
        </div>
    );
};

export default SectionList;