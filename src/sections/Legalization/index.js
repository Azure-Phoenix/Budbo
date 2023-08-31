import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useInView } from 'react-hook-inview';

import locationMap from '../../assets/images/location-map.png';
import locationMapMob from '../../assets/images/location-map-mob.png';
import Notification from '../../components/Notification';
import { StyledLegalization } from './styles';

function Legalization({ setCurrentLink }) {
    const legalizationRef = useRef()
    const [ref, isVisible] = useInView({
        threshold: 1,
    })
    const [inView, setInView] = useState(false)
    useEffect(() => {
        if (isVisible) {
            setCurrentLink('budding')
        }
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true)
            }
        })
        obs.observe(legalizationRef.current)
        return () => {
            obs.disconnect()
        }
    }, [isVisible, legalizationRef])
    return (
        <StyledLegalization className='overflow-hidden' ref={legalizationRef}>
            <div className='container' >
                <div className='width-wrapper col-12 col-xl-10'>
                    <div style={{ maxWidth: '860px' }}>
                        
                        <h4>
                            <span className="text-primary">In the U.S. many states are expected to include cannabis reform
                                initiatives</span> on the November 2024 ballots.
                            There is an estimated population of 16.7 million cannabis consumers in the 16 states that
                            have the potential of legalization.
                        </h4>
                        <h5 className='d-md-none'>Budbo locations:</h5>
                        {inView ? (
                            <img src={locationMapMob} alt="Budbo Locations" className="location-map d-md-none" />
                        ) : 'Loading...'}
                        <h4 className='my-5 position-relative' style={{ zIndex: 1 }}>
                            A European Push Towards Legalization:</h4>
                        <p className='text-colored mb-5 mb-lg-0 position-relative' style={{ zIndex: 5 }}>
                            With Malta’s December 2021 legalization of cannabis and the legalization in Germany and
                            Luxembourg, momentum has been growing for other countries to participate in this
                            worldwide movement. </p>
                        <h5 className='d-none d-md-block'>Budbo is a global solution with locations and token holders all over the world.</h5>
                    </div>
                    {inView ? (
                        <img src={locationMap} alt="Budbo Locations" className='d-none d-md-block location-map' />
                    ) : 'Loading...'}
                    <Notification
                        title='As the industry grows, your future can surely blossom with it.'
                        description='Grow a future in cannabis and blockchain with Budbo.'
                        link='#'
                        buttonName='blossom'
                        linkText='Take Control: Blossom With Budbo'
                        minimized
                    />
                </div>
            </div>
        </StyledLegalization >
    )
}

export default Legalization
