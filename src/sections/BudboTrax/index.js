import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

import traxImg from '../../assets/images/trax-bg.png';
import traxImgMob from '../../assets/images/trax-bg-mob.png';
import WhoBudboIsFor from '../../components/WhoBudboIsFor';
import { StyledColoredWrapper, StyledInsideUl, useMobileMode } from '../../shared';
import { StyledBudboTrax } from './styles';
import { mockTraxInside } from './constants';

function BudboTrax() {
    const isMobileMode = useMobileMode();
    const [inView, setInView] = useState(false)
    const budboTraxRef = useRef()

    useEffect(() => {
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true)
            }
        })
        obs.observe(budboTraxRef.current)
        return () => {
            obs.disconnect()
        }
    }, [budboTraxRef])

    return (
        <StyledBudboTrax ref={budboTraxRef}>
            <div className="container" >
                <div className="width-wrapper col-12 col-xl-10">
                    <h2>Budbo Trax</h2>
                    <h5 className='mt-2 mb-5'>Supply Chain & Chain of Custody Simplified</h5>
                    <span className='budbo-badge fw-bold'>BUDBO TRAX</span>
                    <h3 className='mt-2' style={{ maxWidth: '830px' }}>BudboTrax is built to establish order, peace of mind, and real-time
                        visibility
                        into the transport of cannabis products throughout the cannabis ecosystem.</h3>
                    <p className='text-colored mt-4' style={{ maxWidth: '830px' }}>
                        BudboTrax is a <span className='text-body fw-bold'>powerful GPS</span>{' '}
                        logistics solution built to monitor the
                        entire cannabis supply chain: from seed to soul.
                    </p>
                </div>
                <StyledColoredWrapper className='trax col-12 col-lg-10'>
                    <div className='width-wrapper col-12'>
                        <div style={{ maxWidth: '860px' }}>

                            {inView ? (
                                <img src={isMobileMode ? traxImgMob : traxImg} alt="trax" className='trax-img d-block' />
                            ) : 'Loading...'}
                            <div className="width-wrapper transformed">
                                <span className='budbo-badge fw-bold d-block mb-2'>BUDBO TRAX</span>
                                <h3>
                                    Dispensaries and other vested parties will have full control
                                    and insight into all
                                    cannabis movements via the Budbo Connect Dashboard. <span>From there, products will
                                        be tracked during transport by GPS</span> via BudboTrax.
                                </h3>
                                <p className='text-colored mt-4'>
                                    BudboTrax offers unparalled visibility into the Chain of Custody, and continuity
                                    of the cannabis product.
                                </p>
                                <h5 className='what-inside-title'>What{"'"}s inside?</h5>
                                <StyledInsideUl className='trax'>
                                    {mockTraxInside.map((item, index) => (
                                        <li key={index} className='d-flex align-items-center bg-white border'>
                                            <div>
                                                <div className='d-flex align-items-center'>
                                                    {inView ? (
                                                        <img src={item.logo} alt={item.title} className="me-3" />
                                                    ) : 'Loading...'}
                                                    <h5>{item.title}</h5>
                                                </div>
                                                <h6 className='text-colored mt-3 col-10'>{item.text}</h6>
                                            </div>
                                        </li>
                                    ))}
                                </StyledInsideUl>

                                
                            </div>

                            <WhoBudboIsFor contentToShow='trax' />
                        </div>
                    </div>
                </StyledColoredWrapper>
            </div>
        </StyledBudboTrax>
    )
}
export default BudboTrax;
