import { useEffect } from 'react';
import Lottie from 'lottie-web';

import arrowSm from '../../assets/images/arrow-sm.svg';
import mainAnimation from './main-animation.json';
import { StyledMain } from './styles'

function Main() {
    useEffect(() => {
        Lottie.loadAnimation({
            container: document.querySelector('#background'),
            animationData: mainAnimation,
        });

    }, []);

    return (
        <StyledMain className='d-flex justify-content-center align-items-center position-relative' >

            <div className="container position-relative" >
                <h1 style={{ marginTop: '100px' }} className='fw-bold'>
                    <span className="d-block slogan">Mover. Maker.</span>
                    
                    Boundary breaker.
                </h1>
                <p className='my-5'>
                    Tinder for finding weed? The Amazon of cannabis? Humanities last hope?! Everything you've heard about us is probably true.< br/> < br/>Budbo is the avant-garde of cannabis technology. Battle tested and forged in fire, we are the last of the 47 Ronin. 
                </p>

                <a href="/invest" data-buttonname="hero"
                    onClick={() => window.dataLayer.push({ 'event': 'hero' })}
                    data-listing_id="50096" className=''>
                    <button className="btn btn-primary fw-bold">
                        Join Budbo
                        <img src={arrowSm} alt='arrow' className='ms-1' />
                    </button>
                </a>
            </div>
            <div id="background" />
        </StyledMain>
    )
}

export default Main
