import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

import arrowSm from '../../assets/images/arrow-sm.svg';
import logo from '../../assets/images/budding2.png';
import { mockFooterCompliance } from './mockFooterLinks'
import { StyledFooter } from './style';
function Footer() {
    const footerRef = useRef()
    const [inView, setInView] = useState(false)
    useEffect(() => {
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true)
            }
        })
        obs.observe(footerRef.current)
        return () => {
            obs.disconnect()
        }
    }, [footerRef])
    return (
        <StyledFooter ref={footerRef}>
            <div className="container d-flex flex-column flex-xl-row align-items-center justify-content-between text-center" >
                {inView ? (
                    <img src={logo} style={{ width: 300 }} alt="logo" className='d-block mb-4 mb-xl-0' />
                ) : 'Loading...'}
                <div className='border-wrapper position-relative w-100'>
                    <a href="/invest" className="" data-buttonname="footer"
                        onClick={() => window.dataLayer.push({ 'event': 'footer' })}
                        data-listing_id="50096">
                        <button className="btn btn-primary py-3 fw-bold col-10 mx-auto col-md-6 col-xxl-9 mt-4 mt-xl-0 text-nowrap">
                            Your future awaits.  Join Budbo now
                            {inView ? (
                                <img src={arrowSm} alt='arrow' className='ms-1' />
                            ) : 'Loading...'}
                        </button>
                    </a>
                    <div className='border-footer d-xl-none position-absolute' />
                </div>
                <p className='text-colored d-block'>
                    Together, we pioneer the future!
                </p>

            </div>
            {/* 
            <div className="mt-4 container d-flex flex-column flex-xl-row align-items-center justify-content-between">
                <ul className='text-colored fw-light' style={{
                    listStyle: 'square'
                }}>
                    {mockFooterCompliance.map((comp, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: comp.title }}></li>
                    ))}
                </ul>
            </div>
            */}
        </StyledFooter>
    )
}

export default Footer
