import { useEffect, useRef, useState } from 'react';

import arrowSm from '../../assets/images/arrow-sm.svg';
import earnPerks from '../../assets/images/earn-perks.svg';
import { getClassNames, useWindowResize } from '../../shared';
import PerkSlider from '../Misc/Slider/PerkSlider';
import Card from './Card';
import { StyledActionBar } from './styles';
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
                    <ul className='d-flex justify-content-between flex-wrap position-relative'>
                        <li className='position-relative'>
                            <span className='title'>
                                Name
                            </span>
                            <span className='value text-body'>
                               Budbo Token
                            </span>
                            
                        </li>
                        <li>
                            <span className='title'>
                                Symbol
                            </span>
                            <span className='value'>
                                BUBO
                            </span>
                        </li>
                        <li>
                            <span className='title'>
                                Total Supply
                            </span>
                            <span className='value'>
                                200,000,000
                            </span>
                        </li>
                        <li>
                            <span className='title'>
                                Circulating Supply
                            </span>
                            <span className='value'>
                                82,000,000
                            </span>
                        </li>
                        <li>
                            <span className='title'>
                                Standard
                            </span>
                            <span className='value'>
                                ERC-20
                            </span>
                        </li>
                        <li>
                            <span className='title'>
                               Decimal
                            </span>
                            <span className='value'>
                                18
                            </span>
                        </li>

                    </ul>
                    <div className='w-100 text-center d-block'>
                        <span style={{ fontSize: '12px', opacity: 0.7 }}>   </span>
                    </div>
                    <div className='px-3'>
                        <div className='border-top border-bottom w-100 text-center my-3 py-1 d-block d-md-none'>
                            <span style={{ fontSize: '12px', opacity: 0.7 }}></span>
                        </div>
                    </div>
                </div>
                <div className='hover-trigger'>
                    <div className='d-flex align-items-center mb-3'>
                        <img src={earnPerks} alt="earn perks" className='earn-perks-logo me-2' />
                        <span className='d-none d-md-block'>Token Holder Tiers:</span>
                        <span className='text-colored d-block d-md-none'>Token Holder Tiers</span>
                    </div>

                    <div className='d-flex flex-nowrap pin-wrapper justify-content-between justify-content-md-start'
                        onMouseEnter={() => setShowEarnPerk(true)}>
                        {perks.map((perk, index) => (
                            <span className='text-colored border me-1' key={index}
                                onClick={() => {
                                    setCurrentPerkIndex(index)
                                    handleOnClick(index)
                                }}>{perk.title}
                            </span>
                        ))}

                    </div>
                    <div className='earn-perks pe-3' style={{ display: width > 767 && showEarnPerk ? 'block' : 'none' }}>
                        <div className='core border'>
                            <div className='d-flex justify-content-center align-items-center pb-3'>
                                <img src={earnPerks} alt="earn perks" className='earn-perks-logo' />
                                <span className='d-block ms-3 text-nowrap mt-2'>Token Holder Tiers!</span>
                            </div>

                            <div className='py-3 border-top border-bottom d-flex flex-column-reverse' style={{ gap: '16px' }}>
                                <Card
                                    title='500,000+ Tokens'
                                    description='Gold badge + 10% Reward tokens'
                                   
                                    color='yellow'
                                />
                                <Card
                                    title='250,000  -  499,999 Tokens'
                                    description='Silver badge + 5% Reward tokens'
                                    
                                    color='grey'
                                />
                                <Card
                                    title='100,000  -  249,999 Tokens'
                                    description='Bronze badge + 2% Reward tokens'
                                    
                                    color='bronze'
                                />
                                <Card
                                    title='50,000  -  99,999 Tokens'
                                    description='Green badge'
                                   
                                    color='green'
                                />
                                <Card
                                    title='10,000  -  49,999 Tokens'
                                    description='Purple badge'
                                   
                                    color='purple'
                                />
                                <Card
                                    title='5,000  - 9,999 Tokens'
                                    description='Red badge on your Budbo profile'
                                    color='red'
                                />
                            </div>
                            <p className='tip pt-2'>
                                <span></span>
                                
                            </p>
                        </div>
                    </div>
                </div>
                <div onMouseEnter={() => setShowEarnPerk(false)}>
                < br />
                    <PerkSlider sliderRef={sliderRef} />
                </div>
                <div className='invest-wrapper'>
                    <p className='tip pt-2'><span></span></p>
                    <div className='invest d-md-flex justify-content-between align-items-center pt-3'>
                        <div className='d-flex align-items-center'>
                            <div className={getClassNames('invest-title',
                                isShorterScreen ? 'd-md-flex mb-md-2 w-100 align-items-center' : 'd-block')}>
                                <span className='d-block text-body'>Swap Tokens</span>
                                <span className={getClassNames('d-block text-colored text-nowrap',
                                    isShorterScreen ? 'ms-md-3' : '')}></span>
                            </div>
                            <div className='input-wrapper d-md-none w-100 ms-3'>
                                <input type='text' placeholder='0.00' className='border px-3' onChange={e => handlePerkPrice(e.target.value)} />

                                <div className='h-100 d-flex justify-content-center align-items-center border position-absolute'>
                                    <span>$</span>
                                </div>
                            </div>
                        </div>

                        <div className={getClassNames('mt-2 mt-md-0 flex-grow-1', isShorterScreen ? 'mb-3' : 'ms-md-4')}>
                            <div className='input-wrapper d-none d-md-block w-100'>
                                <input type='text' placeholder='0.00' className='border px-3'
                                    value={inputValue} onChange={e => {
                                        setInputValue(e.target.value)
                                        handlePerkPrice(e.target.value)
                                    }} />
                                <div className='h-100 d-flex justify-content-center align-items-center border position-absolute'>
                                    <span>$</span>
                                </div>
                            </div>
                            {isShorterScreen &&
                                <a href="/invest"
                                    className='text-nowrap btn w-100 d-flex align-items-center justify-content-center ms-md-3'
                                    data-buttonname="sidebar"
                                    data-listing_id="50096"
                                    onClick={() => { window.dataLayer.push({ 'event': 'sidebar' }); handleShowPerks() }}>
                                   BTC, ETH, USDT
                                    <img src={arrowSm} alt="arrow" className='ms-2' />
                                </a>}
                        </div>

                    </div>
                    {!isShorterScreen &&
                        <a href="/invest"
                            data-buttonname="sidebar"
                            data-listing_id="50096"
                            className='d-none mt-2 mb-3 text-nowrap btn w-100 d-md-flex align-items-center justify-content-center 
                            kcxHinvestProcessForm'
                            onClick={() => { window.dataLayer.push({ 'event': 'sidebar' }); handleShowPerks() }}>
                            INVEST
                            <img src={arrowSm} alt="arrow" className='ms-2' />
                        </a>}
                </div>

                <SideBarSwiper />
            </div>
            <div className="d-none d-md-block ghost-container position-absolute">
            </div>

        </StyledActionBar >
    )
}
export default ActionBar;
