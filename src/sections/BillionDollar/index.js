
import { useEffect } from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useInView } from 'react-hook-inview'

import Notification from '../../components/Notification'
import { useMobileMode } from '../../shared';
import { StyledBillionDollar } from './styles'
import { mockBillionIdea, mockBillionSolution } from './constants'

function BillionDollar({ setCurrentLink }) {
    const billionDollarRef = useRef()
    const [inView, setInView] = useState(false)
    const [ref, isVisible] = useInView({
        threshold: 1,
    })
    useEffect(() => {
        if (isVisible) {
            setCurrentLink('idea')
        }
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true)
            }
        })
        obs.observe(billionDollarRef.current)
        return () => {
            obs.disconnect()
        }
    }, [isVisible, billionDollarRef])

    const isMobileMode = useMobileMode();

    return (
        <StyledBillionDollar ref={billionDollarRef}>
            <div className="container" id="idea" ref={ref}>
                <div className="width-wrapper col-12 col-md-10 " >
                    <div style={{ maxWidth: '860px' }}>
                        <h2 className='mt-0'
                            style={{ maxWidth: '760px' }}>{mockBillionIdea.title}</h2>
                        {inView ? (<img src={isMobileMode ? mockBillionIdea.imageMob : mockBillionIdea.image}
                            alt="idea" className="w-100" />) : 'Loading...'}
                        {mockBillionIdea.description}
                        {mockBillionIdea.text}
                        <Notification
                            title="Don't miss out on the golden age of cannabis and blockchain"
                            description="You are an integral part of this revolutionary concept.  Join us, as we bring together two
                         of the fastest growing industries of our time!"
                            link="#"
                            buttonName="revolution"
                            linkText="Join the Revolution"
                            minimized
                        />
                        {mockBillionSolution.title}
                        {inView ? (<img src={isMobileMode ? mockBillionSolution.imageMob : mockBillionSolution.image}
                            alt="solution" className="w-100" />) : 'Loading...'}
                        {mockBillionSolution.description}
                        {mockBillionSolution.text}
                        {mockBillionSolution.text2}
                    </div>
                </div>

            </div>
        </StyledBillionDollar>
    )
}

export default BillionDollar
