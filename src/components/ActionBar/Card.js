import { StyledCard } from './styles';
import { colorsAvatars } from './constants';

export default function Card({ color, title, description, withRed, allTheAbove }) {

    return (
        <StyledCard className='border d-flex flex-column-reverse flex-md-row align-items-start align-items-md-center
         justify-content-end'>
            <div className='card-content me-xxl-3'>
                <div className='title my-3 mt-md-0 mb-md-2'>
                    {title}
                    {withRed && <span className='red'>*</span>}
                </div>
                <p className='description'>
                    {description}
                </p>
                {allTheAbove && <span className='all-the-above'>+ All the Above</span>}
            </div>
            <img src={colorsAvatars[color].img} alt="avatar" className='avatar' style={{ height: '54px' }} />

        </StyledCard>
    )
}