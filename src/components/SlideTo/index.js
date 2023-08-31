import { useState } from 'react';

import discoverLogo from '../../assets/images/discover-logo.svg';
import matchLogo from '../../assets/images/match-logo.svg';
import swiperImage from '../../assets/images/swiper-discover.png';
import matchImage from '../../assets/images/swiper-match1.png';
import { getClassNames, useTabletMode } from '../../shared';
import PhoneSwiper from '../PhoneSwiper';
import { StyledSlideTo } from './styles';

export default function SlideTo({ discover }) {

    const tabletMode = useTabletMode();
    const [mobileMode, setMobileMode] = useState(tabletMode);



    return (
        <StyledSlideTo>
            <div className="container">
                <div className="col-12 col-xl-10 mx-auto">
                    <img src={discover ? discoverLogo : matchLogo} alt="discover" className='d-block mx-auto mb-2' />
                    <h3 className='text-center'
                        style={{ color: 'var(--primary)' }}>Swipe to {discover ? 'Discover' : 'Match'}</h3>
                    <p className='text-colored mt-3 mb-4 text-center'>
                        The patent-pending matching feature allows users to personalize
                        <br /> their medicne, product, and experience.
                    </p>
                </div>
                <div className="text-center mb-5">
                    <div className='actions d-flex justify-content-center rounded border d-inline-flex'>
                        <div onClick={() => setMobileMode(false)}
                            className={getClassNames('m-1 px-2 rounded',
                                mobileMode ? '' : 'active')}>
                            <span>DESKTOP</span>
                        </div>
                        <div onClick={() => setMobileMode(true)}
                            className={getClassNames('m-1 px-2 rounded', mobileMode ? 'active' : '')}>
                            <span>MOBILE</span>
                        </div>
                    </div>
                </div>

                {discover ?
                    mobileMode
                        ?
                        <PhoneSwiper switchMobileMode={mobileMode} discover description />
                        :
                        <div className='w-100 position-relative'>
                            <img src={mobileMode ? discoverLogo : swiperImage} alt="match" className='w-100' />
                        </div>
                    :
                    mobileMode
                        ?
                        <PhoneSwiper switchMobileMode={mobileMode} description />
                        :
                        <div className='w-100 position-relative'>
                            <img src={mobileMode ? discoverLogo : matchImage} alt="match" className='w-100' />
                        </div>
                }

            </div>
        </StyledSlideTo>
    )
}
