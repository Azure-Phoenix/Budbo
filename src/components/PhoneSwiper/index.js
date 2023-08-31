
import budboMatch from '../../assets/budbo-match.gif'
import budboDiscover from '../../assets/budbo-swipe.gif'
import r2Phone1 from '../../assets/images/r2-phone1.png';
import r2Phone3 from '../../assets/images/r2-phone3.png';
import r4Phone1 from '../../assets/images/r4-phone1.png';
import r4Phone3 from '../../assets/images/r4-phone3.png';
//import { useTabletMode } from '../../shared';
import { StyledPhoneSwiper } from './styles';

function PhoneSwiper({ reason4, description, discover, discoverVideo }) {

    // const isTabletDevice = useTabletMode();
    //const isForTablet = discover ? switchMobileMode : isTabletDevice
    const videoURL = discoverVideo || discover ? budboDiscover : budboMatch;

    const videoFile =
        <div className="react-player">
            <img
                style={{
                    width: 270,
                    height: 565,
                    borderRadius: 36
                }}
                src={videoURL}
            />
        </div>

    return (
        <StyledPhoneSwiper className='d-flex justify-content-between align-items-end w-100 phone-slider
        position-relative'>

            <ul className='d-flex w-100 justify-content-center justify-content-md-between'>
                <li className='d-none d-md-flex align-items-end'>
                    {reason4 ?
                        <img src={r4Phone1} alt="phone" className='phone w-100' />
                        :
                        <img src={r2Phone1} alt="phone" className='phone w-100' />
                    }
                </li>
                <li className='mx-md-4 mx-5'>
                    {videoFile}
                </li>
                <li className='d-none d-md-flex align-items-end'>
                    {reason4 ?
                        <img src={r4Phone3} alt="phone" className='phone w-100' />
                        :
                        <img src={r2Phone3} alt="phone" className='phone w-100' />
                    }
                </li>
            </ul>

            {description && <p className='position-absolute text-center w-100 tip'>
                <span className='underline'></span> </p>}
        </StyledPhoneSwiper>
    )
}
export default PhoneSwiper;
