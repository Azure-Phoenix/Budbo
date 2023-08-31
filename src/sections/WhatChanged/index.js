import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import whatChangedImg from '../../assets/images/what-changed-image.png'
import Notification from '../../components/Notification'
import { StyledWhatChanged } from './styles'
import { mockOffers, mockTextContent } from './constants'

function WhatChanged() {
    const whatChangedRef = useRef()
    const [inView, setInView] = useState(false)
    useEffect(() => {
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true)
            }
        })
        obs.observe(whatChangedRef.current)
        return () => {
            obs.disconnect()
        }
    }, [whatChangedRef])
    return (
        <StyledWhatChanged ref={whatChangedRef}>
            <div className="container" >
                <div className="width-wrapper col-12 col-xl-10">
                    <div style={{ maxWidth: '860px' }}>
                        {mockTextContent.title}
                        {inView ? (
                            <img src={whatChangedImg} alt="what-changed" className='d-none d-md-block what-changed-img' width="90%" />
                        ) : 'Loading...'}
                        <div className='mob-img d-md-none' />
                        <h3>{mockTextContent.subtitle}</h3>
                        <h4>{mockTextContent.subtitle2}</h4>
                        <ul className='offers'>
                            {mockOffers.map((offer, index) => (
                                <li key={index} className="d-flex align-items-start align-items-md-center">
                                    {inView ? (
                                        <img src={offer.logo} alt={index} className="me-4" />
                                    ) : 'Loading...'}
                                    {offer.text}
                                </li>
                            ))}
                        </ul>
                        {mockTextContent.text}
                        <Notification
                            title="Problem solver. Industry Evolver."
                            description=""
                            link="#"
                            buttonName='technology'
                            linkText="Pinoeer the future of Cannabis. Join Budbo"
                        />
                    </div>
                </div>
            </div>
        </StyledWhatChanged>
    )
}

export default WhatChanged
