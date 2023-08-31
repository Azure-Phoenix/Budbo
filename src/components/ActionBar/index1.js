import { useEffect, useRef, useState } from 'react';

import arrowSm from '../../assets/images/arrow-sm.svg';
import earnPerks from '../../assets/images/earn-perks.svg';
import { getClassNames, useWindowResize } from '../../shared';
import PerkSlider from '../Misc/Slider/PerkSlider';
import Card from './Card';
import { StyledActionBar } from './styles';
import { StyledForm } from './styles';
import SideBarSwiper from './Swiper';
import { perks } from './constants';

function ActionBar({ DealData }) {
    const { height, width } = useWindowResize();
    const isShorterScreen = height < 1050;
    const [currentPerkIndex, setCurrentPerkIndex] = useState(0);
    const scrollRef = useRef(null);
    const sliderRef = useRef();
    const [inputValue, setInputValue] = useState('');
    const [showEarnPerk, setShowEarnPerk] = useState(false)

    const handleOnClick = index => {
        sliderRef.current.slickGoTo(index);
    };

    const handlePerkPrice = (perkPriceValue) => {
        if (perkPriceValue < 1000) {
            handleOnClick(0)
        }
        if (perkPriceValue >= 1000 && perkPriceValue <= 2499) {
            handleOnClick(0)
        }
        else if (perkPriceValue >= 2500 && perkPriceValue <= 4999) {
            handleOnClick(1)
        }
        else if (perkPriceValue >= 5000 && perkPriceValue <= 9999) {
            handleOnClick(2)
        }
        else if (perkPriceValue >= 10000 && perkPriceValue <= 24999) {
            handleOnClick(3)
        }
        else if (perkPriceValue >= 25000 && perkPriceValue <= 49999) {
            handleOnClick(4)
        }
        else if (perkPriceValue >= 50000) {
            handleOnClick(5)
        }
    }

    const [Name, setName] = useState('')
    const [Phone, setPhone] = useState('')
    const [Email, setEmail] = useState('')

    function sendInvestorInfo(event) {
        event.preventDefault();
        $.ajax({
            type: 'post',
            url: 'http://invest.budbo.io/InvestServer.php',
            data: {
                email: Email,
                name: Name,
                phone: Phone
            },
            success() {
                 $('.portalForm').hide();
                 $('.portalMessage').show();

            }
        })
    }

    const handleShowPerks = () => {

        let lastIndex = 0;

        perks.forEach((perk, index) => {

            if (parseInt(inputValue) >= perk.value) {
                lastIndex = index;
            }
        });

        scrollRef.current.scrollTo({
            top: 0,
            left: (lastIndex * 295 + lastIndex * 8),
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: 0,
                left: (currentPerkIndex * 295 + currentPerkIndex * 8),
                behavior: 'smooth',
            });
        }

    }, [currentPerkIndex]);

    return (
        <StyledActionBar>

            <div id="calculator" className='side-bar-container border w-100 position-sticky my-4 my-md-0'
                onMouseLeave={() => setShowEarnPerk(false)}>
                <div className='top-content rounded-top'>
                    
                </div>
                <div className='hover-trigger portalForm'>
                    <div className='d-flex align-items-center mb-3'>
                        <span className='d-none d-md-block'>Interested in investing? <br/> Fill out the form below.</span>
                    </div>
                </div>
                <div className='hover-trigger'>
                    <span className='text-primary portalMessage' style={{display: "none"}}>Thank you for your interest in Budbo. <br/> One of our team members will be in touch with you soon.</span>
                </div>
                <StyledForm>
                <div className="mt-6 portalForm">
                            <div className="flex-1">
                                <input type="text" placeholder="Name" className="border px-3" name='name'
                                    value={Name} onChange={e => setName(e.target.value)} />
                            </div>

                            <div className="flex-1 mt-6">
                                <input type="tel" placeholder="Phone" className="border px-3" name='phone'
                                    value={Phone} onChange={e => setPhone(e.target.value)} />
                            </div>

                            <div className="flex-1 mt-6">
                                <input type="email" placeholder="Email" className="border px-3" name='email'
                                    value={Email} onChange={e => setEmail(e.target.value)} />
                            </div>

                                <button className="btn btn-primary py-3 fw-bold col-12" type='button' onClick={(event) => sendInvestorInfo(event)}>
                                    Submit
                                    <img src={arrowSm} alt='arrow' className='ms-1' />
                                </button>
                        </div>
                </StyledForm>
                

                <SideBarSwiper />
            </div>
            <div className="d-none d-md-block ghost-container position-absolute">
            </div>

        </StyledActionBar >
    )
}
export default ActionBar;
