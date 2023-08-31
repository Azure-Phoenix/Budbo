import { useEffect, useRef, useState } from 'react'

import budbo from '../../assets/images/budbo-bg.png'
import inside1 from '../../assets/images/inside1.svg'
import inside2 from '../../assets/images/inside2.svg'
import inside3 from '../../assets/images/inside3.svg'
import inside4 from '../../assets/images/inside4.svg'
import uma from '../../assets/images/uma.png'
import umaMob from '../../assets/images/uma-mob.png'
import SlideTo from '../../components/SlideTo'
import WhoBudboIsFor from '../../components/WhoBudboIsFor/index';
import { StyledColoredWrapper, StyledInsideUl, useMobileMode } from '../../shared';
import { StyledBudboApp } from './styles'

function BudboApp() {
    const isMobileMode = useMobileMode()
    const budboAppRef = useRef()

    const [inView, setInView] = useState(false)

    useEffect(() => {

        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true)
            }
        })
        obs.observe(budboAppRef.current)
        return () => {
            obs.disconnect()
        }
    }, [budboAppRef])
    return (
        <StyledBudboApp ref={budboAppRef}>
            <div className="container">
                <div className="width-wrapper col-12 col-xl-10">
                    <div style={{ maxWidth: '860px' }}>
                        <div className="mob-img d-md-none" />
                        {inView ? (
                            <img src={budbo} alt="budbo" className='budbo-img d-none d-md-block' />
                        ) : 'Loading...'}
                        <h2 className='budbo-title'>Budbo App</h2>
                        <h5>The right cannabis products just a screen tap away</h5>
                        <span className='budbo-badge fw-bold d-block mb-2'>BUDBO APP</span>
                        <h3>The app allows consumers to easily find and order their preferred
                            cannabis products in a familiar and gamified manner through
                            our modern user-friendly interface.
                        </h3>

                        <SlideTo />
                        <SlideTo discover />

                        <h5 className='what-inside-title'>What{"'"}s inside?</h5>
                        <StyledInsideUl>
                            <li className='border d-flex justify-content-center align-items-center'>
                                <div className='d-flex align-items-center w-100'>
                                    {inView ? (
                                        <img src={inside1} alt="inside1" className='me-3' />
                                    ) : 'Loading...'}
                                    <h5>AI-Driven user experience </h5>
                                </div>

                            </li>
                            <li className='border d-flex justify-content-center align-items-center'>
                                <div className='d-flex align-items-start w-100'>
                                    {inView ? (
                                        <img src={inside2} alt="inside1" className='me-3 mt-1' />
                                    ) : 'Loading...'}
                                    <div className='flex-grow-1'>
                                        <h5>Wide range of tokens and cryptocurrencies</h5>
                                        <h6 className='text-colored mt-2'>to incentivize, engage, <br />
                                            and reward users.</h6>
                                    </div>
                                </div>

                            </li>
                            <li className='border d-flex justify-content-center align-items-center'>
                                <div className='d-flex align-items-center w-100'>
                                    {inView ? (
                                        <img src={inside3} alt="inside3" className='me-3' />
                                    ) : 'Loading...'}
                                    <h5>Scalability powered by
                                        blockchain <br /> technology</h5>
                                </div>

                            </li>
                            <li className='border d-flex justify-content-center align-items-center'>
                                <div className='d-flex align-items-center w-100'>
                                    {inView ? (
                                        <img src={inside4} alt="inside4" className='me-3' />
                                    ) : 'Loading...'}
                                    <h5>Mobile first approach so<br />
                                        users can access Budbo anywhere</h5>
                                </div>
                            </li>
                        </StyledInsideUl>
                    </div>
                </div>
                <StyledColoredWrapper className='col-12 col-lg-10'>
                    <div className='width-wrapper col-12'>
                        <div style={{ maxWidth: '860px' }}>

                            <span className='budbo-badge fw-bold d-block mb-2'>BUDBO APP</span>
                            <h3>We are the premier online marketplace for Cannabis.
                            </h3>
                            <p className='text-colored text'>
                                The combination of a best-in-class mobile app and business intelligence
                                tool empowers users to connect and interact in ways that have never
                                been possible before.
                                <br />
                                <br />
                                By adopting the “swiping” component made popular by applications like "Tinder",
                                Budbo facilitates a quick and easy product discovery process. Users
                                can now find and purchase new products in a way never before possible.
                                
                            
                            </p>
                            {isMobileMode ?
                                (
                                    inView ? (
                                        <img src={umaMob} alt="uma" className='d-block my-4 w-100' />)
                                        : 'Loading...'
                                )
                                :
                                (
                                    inView ? (
                                        <img src={uma} alt="uma" className='uma-img d-block' />
                                    ) : 'Loading...'
                                )
                            }
                            <div className='col-12 col-md-11 mx-auto'>
                                
                                <h5 style={{ fontWeight: 500 }}></h5>
                
                            </div>
                            <p className='text-colored d-none d-md-block my-5'>

                            </p>
                            <WhoBudboIsFor contentToShow='app' />
                        </div>
                    </div>


                </StyledColoredWrapper>
            </div>
        </StyledBudboApp >
    )
}

export default BudboApp
