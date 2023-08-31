import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useInView } from 'react-hook-inview';

import chart from '../../assets/images/chart.png'
import mentor from '../../assets/images/mentor.png'
import reason5 from '../../assets/images/reason5-bg.png';
//import shareholder from '../../assets/images/shareholder-user.png'
import mentor2 from '../../assets/images/stephen-CFO.png'
import reason7Map from '../../assets/images/world-map.png'
import PhoneSwiper from '../../components/PhoneSwiper';
import { StyledReasons } from './styles'
import { mockMentorAwards, mockStephenCFO, reason1Content } from './constants'

import 'swiper/css';

function Reasons({ setCurrentLink }) {
    const reasonsRef = useRef()
    const [inView, setInView] = useState(false)
    const [ref, isVisible] = useInView({
        threshold: 1,
    })
    useEffect(() => {
        if (isVisible) {
            setCurrentLink('reasons')
        }
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true)
            }
        })
        obs.observe(reasonsRef.current)
        return () => {
            obs.disconnect()
        }
    }, [isVisible, reasonsRef])
    return (
        <StyledReasons ref={reasonsRef}>
            <div className='container' >
                <div className='width-wrapper col-xl-10'>
                    <h2 ref={ref} id="reasons" className='reasons-title'><span>
                    </span>
                        Nothing in the world can take the place of <span style={{ color: 'var(--primary)' }}>
                            persistence.</span>
                    </h2>
 <h6>...and nothing worthwile comes quick or easy.</h6>

                    <div className="reasons reason1 border-bottom">
                      
                        <p className='text-colored'>
                            
                            
                            <span className='text-body'>
                                Without further delay, introducing the three parts to the Budbo Ecosystem:
                            </span>
                        </p>
                        <ul className='ecosystem w-100'>
                            {reason1Content.map((item, index) => (
                                <>
                                    <li key={index} className="border-bottom position-relative">
                                        <div className='d-flex  align-items-center flex-wrap flex-lg-nowrap'>
                                            <div className='d-flex align-items-center me-lg-5 mb-4 mb-lg-0 rounded'
                                                style={{ backgroundColor: item.background }}>
                                                <span className='fw-bold' style={{ color: item.textColor }}>
                                                    Budbo {item.title}</span>
                                            </div>
                                            <p className='text-colored'>{item.text}</p>
                                        </div>
                                        <div className="w-100 mt-5 position-relative"
                                            style={{ background: `url(${item.image}) left center/cover no-repeat` }}>
                                            {inView ? (
                                                <img src={item.image} alt={item.title} className="d-none d-md-block w-100" />
                                            ) : 'Loading...'}
                                        </div>
                                    </li>
                                </>

                            ))}
                        </ul>
                    </div>


                    <div className="reasons reason2 border-bottom">
                        <h6>One-of-a-kind "product first" approach</h6>
                        <h3 className="mt-2 mb-5">
                            <span className="text-primary">Budbo’s unique marketplace has </span>{' '}
                            proven to be highly effective in user engagement and retention.
                        </h3>
                        <p className='text-colored'>
                            One of Budbo's many features, the Discovery “swiping” component, made popular by applications like "Tinder", invites
                            users to browse a wide variety of cannabis products and facilitates a quick
                            and easy discovery and ordering process.
                           
                        </p>

                        <PhoneSwiper description discoverVideo />
                    </div>

                    

                    <div className="reasons reason4 border-bottom">
                        <h6>United States Patent # 17/826,580</h6>
                        <h3 className='mt-2 mb-5'>
                            Our patent pending <span className="text-primary">product matching</span>{' '}
                            revolutionizes how patients and consumers find cannabis.
                        </h3>
                        <p className='text-colored'>
                            We've just put a budtender in the palm of your hand.
                            <br />
                            <br />
                           
                        </p>

                        <PhoneSwiper reason4 description />

                         <p className='mob-font-size'>
                         <br />
                            <br />
                           Our AI-driven algorithm is improving every day with the help of one of Budbo's key members,  <span className='text-primary'>Dr. Uma Dhanablan. </span>
                          
                        </p>

                        <div className='mentor d-lg-flex align-items-end'>
                            {inView ? (
                                <img src={mentor} alt="mentor" className='col-8 mx-auto mb-4 d-block col-lg-3 me-lg-5' />
                            ) : 'Loading...'}
                            <ul>
                                {mockMentorAwards.map((award, index) => (
                                    <li key={index} className='ms-4 ms-lg-0 mb-1'>
                                        <p>{award}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                       

                    </div>

                    <div className="reasons reason5 border-bottom">
                        <h6>Community above all</h6>
                        <h3 className='mt-2 mb-5'>
                            If your goal is <span className="text-primary">freedom,</span> be prepared to fight battles you didn't ask for. If your goal is <span className="text-primary">authenticty,</span> be prepared to confront shame that wasn't yours to carry.
                        </h3>
                            <p className='text-colored'>
                         
                        </p>

                        <p className='text-colored'>
                            Nothing is more important to Budbo than our community. It has been our north star through the trials and tribulations of the last few years. Budbo is the true remaining <span className="text-primary">ragtag band</span> of patients, recreational users, doctors, musicians, token holders, misfits and scholars left, as the cannabis industry races toward commercialization.< br /> < br />

                            We were founded by community first and grass root principles, and it is under that light we created the Budbo token reward ecosystem.  Every Budbo user, from blockchain pros to tech-challenged luddites, now have the opportunity to <span className="text-primary">earn some while they burn one.</span>
                        </p>
                        <div className="img-wrapper position-relative">
                            {inView ? (
                                <img src={reason5} alt="reason5" className='d-none d-lg-block w-100' />
                            ) : 'Loading...'}
                        </div>
                     


                    </div>

                    

                    <div className="reasons reason7">
                        <h6>Join the Budbo Family</h6>
                        <h3 className='mt-2 mb-5'>
                            <span className="text-primary">Together,</span>{' '}
                            we pioneer the future.
                        </h3>
                       
                        <p className='text-colored'>
                            You are in control of the path and journey your life takes. Take the step, and begin your journey with us. Join the Budbo family, become a token holder today.
                        </p>

                    </div>
                </div>
                <div className='width-wrapper col-xl-10 col-xxl-12'>
                    <div className='map-wrapper mt-4 position-relative'>
                        {inView ? (
                            <img src={reason7Map} alt="reason7Map" className=' d-none d-md-block reason7-map' />
                        ) : 'Loading...'}
                        <div className='mob-map' />
                        <div className='width-wrapper col-xl-10'>
                           
                        </div>
                    </div>
                </div>
            </div>
        </StyledReasons>
    )
}
export default Reasons 
