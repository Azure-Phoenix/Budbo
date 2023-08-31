import { useEffect, useRef, useState } from 'react';

import headerLogo from '../../assets/images/header-logo.svg';
import headerLogoMob from '../../assets/images/header-logo-mob.svg';
import { ReactComponent as MailIcon } from '../../assets/images/mail-icon.svg';
import { ReactComponent as OfferIcon } from '../../assets/images/offer-icon.svg';
import { ReactComponent as TelIcon } from '../../assets/images/tel-icon.svg';
import { getClassNames, useMobileMode } from '../../shared';
import { StyledHeader } from './styles';
import { mockHeaderLinks } from './constants';

import token from '../../assets/images/icon-bubo.svg';

function Header({ currentLink, DealData }) {
    const isMobileMode = useMobileMode();
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const headerRef = useRef()

    useEffect(() => {
        document.body.style.overflow = isMobileOpen ? 'hidden' : 'auto';

    }, [isMobileOpen]);

    const leftList = (
        <ul className='left-list d-flex justify-content-center justify-content-xl-between
        align-items-center col-2 col-md-2
         flex-wrap flex-xl-nowrap text-center text-lg-start'>
            <a href="#" className='d-flex align-items-center mb-2 mb-xl-0 rounded'>
                +
                <span className='text-colored'>
                    ADD YOUR LOCATION
                </span>
            </a>
        </ul>
    )

    const rightList = (
        <ul className='right-list mt-4 mt-xl-0 d-flex justify-content-center justify-content-lg-end
         flex-wrap flex-xl-nowrap align-items-center'>
            <li className='d-block d-xl-flex align-items-center col-6 col-xl text-center text-xl-start
             justify-content-center
            mb-3 mb-xl-0'>
                <span className='text-colored mr-5'>Convert Prices to</span>
                <img src={token} />
                <div className="form-check form-switch form-switch-md">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                </div>
            </li>
            <li className='d-block d-xl-flex align-items-center col-6 col-xl text-center text-xl-start
             justify-content-center
            mb-3 mb-xl-0'>
                <span className='text-colored-purple'>1 BUBO</span><span className='text-colored-black'> = 0.157 USDT</span><span> - </span><span className='text-colored-green'>0.5%</span>
            </li>
            <li className='d-block d-xl-flex align-items-center col-6 col-xl text-center text-xl-start
             justify-content-center
            mb-3 mb-xl-0'>
                <span className='text-colored'>Connect Crypto Wallet</span>
            </li>
        </ul>
    )


    return (
        <StyledHeader className='w-100 d-block bg-white overflow-hidden' ref={headerRef}>

            <div className='header-top d-none d-xl-flex justify-content-between align-items-center w-100 px-3 
            px-xxl-4 py-2 py-xxl-3' >
                {/* {socialLinks} */}
                <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                    {leftList}
                    {rightList}
                </div>
            </div>
            <div className='header-bottom bg-white d-flex align-items-center w-100 px-3
             px-xxl-4 py-2 border-top'>
                <img src={isMobileMode ? headerLogoMob : headerLogo} alt="header-logo"
                    className='cursor-pointer header-logo'
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth',
                        });
                    }} 
                />

                <a href="/invest"
                        onClick={() => window.dataLayer.push({ 'event': 'header' })}
                        className="btn"
                        data-buttonname="header"
                        data-listing_id="50096"
                    >
                        Find Perfect Match
                </a>
                <div class="search padding-x">
                    <form class="nosubmit">
                        <input
                            class="nosubmit"
                            type="search"
                            placeholder="Products, retailers & more..."
                        />
                    </form>
                </div>
                    

                <div className={getClassNames('d-flex align-items-center', isMobileMode ? 'flex-grow-1 mobile justify-content-between' : '')}>
                    <div className={getClassNames('hamburger d-flex align-items-center justify-content-end ' +
                        'd-xl-none cursor-pointer',
                        isMobileOpen ? 'active' : '')}
                        onClick={() => setIsMobileOpen(!isMobileOpen)}>
                        <span className='hamburger-line w-100' />
                        <span className='hamburger-line w-75' />
                        <span className='hamburger-line w-100' />
                    </div>
                </div>
            </div>



            <div className={getClassNames('header-mobile-menu d-flex d-xl-none flex-column align-items-center ' +
                ' justify-content-start justify-content-md-center position-fixed bg-white overflow-hidden h-100',
                isMobileOpen ? 'active' : '')}>


                {mockHeaderLinks.map((item, index) => (
                    <a href={item.href} key={index} className={getClassNames('text-colored mb-3',
                        item.href.substring(1) === currentLink ? 'active' : '')}
                        onClick={() => {
                            setIsMobileOpen(false)
                        }}>
                        {item.title}
                    </a>
                ))}

                {rightList}
                {/* {socialLinks} */}
                {leftList}

            </div>

        </StyledHeader>
    );
}

export default Header;