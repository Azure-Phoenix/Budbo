import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useInView } from 'react-hook-inview';

import chart from '../../assets/images/chart.png';
import uniqueImage from '../../assets/images/unique-img.png';
import uniqueImageMob from '../../assets/images/unique-img-mob.png';
import violetMap from '../../assets/images/violet-map.svg';
import violetMapMob from '../../assets/images/violet-map-mob.svg';
import Notification from '../../components/Notification';
import { useMobileMode } from '../../shared';
import { StyledBudboUnique } from './styles';
import Unique from './Unique';
import { mockCannabisData, mockFeatures } from './constants';

function BudboUnique({ setCurrentLink }) {
    const budboUniqueRef = useRef()
    const [inView, setInView] = useState(false)
    const isMobileMode = useMobileMode()
    const [ref, isVisible] = useInView({
        threshold: 1,
    })
    useEffect(() => {
        if (isVisible) {
            setCurrentLink('industry')
        }
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true)
            }
        })
        obs.observe(budboUniqueRef.current)
        return () => {
            obs.disconnect()
        }
    }, [isVisible, budboUniqueRef])
    return (
        <StyledBudboUnique className='position-relative' ref={budboUniqueRef}>
            <div className="container" >
                <div className='width-wrapper col-12 col-xl-10'>

                    {/* added separate section for react-hook-inview */}
                    <Unique setCurrentLink={setCurrentLink} />

                    {isMobileMode ?
                        (
                            inView ? (
                                <img src={uniqueImageMob} alt="Budbo Unique" className='w-100 unique-img' />
                            ) : 'Loading...'
                        )
                        :
                        (
                            inView ? (
                                <img src={uniqueImage} alt="Budbo Unique" className='w-100 unique-img' style={{ maxWidth: '1100px' }} />
                            ) : 'Loading...'
                        )
                    }
                    <div style={{ maxWidth: '860px' }}>
                        <h5 style={{ fontWeight: 600 }}>Unique features you’ll be hard pressed to
                            find anywhere else:</h5>
                        <ul className='unique-features'>
                            {mockFeatures.map((feature, index) => (
                                <li key={index} className="border d-flex align-items-center bg-white">
                                    <div>
                                        <div className='d-flex align-items-center'>
                                            {inView ? (
                                                <img src={feature.logo} alt={feature.title} className="me-3" />
                                            ) : 'Loading...'}
                                            <h5>{feature.title}</h5>
                                        </div>
                                        <p>{feature.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        
                    </div>
                </div>
              
                <div className='width-wrapper col-12 col-xl-10'>
                    <div style={{ maxWidth: '860px' }}>
                        <Notification
                            title='Become a pioneer in the brave new world of cannabis.'
                            description=''
                            link='#'
                            buttonName='team'
                            linkText='Join the Team!'
                        />
                        <h2 className='margin-top' ref={ref} id="industry"></h2>
                        
                        <div className='violet-map'>
                            <h2>
                                New Frontier Data, released the <br className='d-none d-lg-block' /> Global
                                Cannabis Report:
                                <span className='d-block'>2023 Industry Outlook</span>
                            </h2>
                            <h3 className='mt-5'>
                                The report estimates the global total addressable cannabis market (regulated and illicit)
                                at $344 billion USD and identifying the top five regional markets to be:
                            </h3>
                            {inView ? (
                                <img src={isMobileMode ? violetMapMob : violetMap} alt="Violet Map" className='w-100' />
                            ) : 'Loading...'}
                        </div>
                    </div>
                </div>
                <div className='width-wrapper col-12 col-xl-10'>
                    <div style={{ maxWidth: '860px' }}>
                        <ul className='cannabis-data'>
                            {mockCannabisData.map((data, index) => (
                                <li key={index}>
                                    {data.title}
                                    {inView ? (
                                        <img src={data.image} alt={data.index} className="w-100" />
                                    ) : 'Loading...'}
                                    {data.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </StyledBudboUnique >
    )
}

export default BudboUnique;
