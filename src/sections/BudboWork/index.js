import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import workImage from '../../assets/images/work-bg.png';
import { StyledBudboWork } from './styles';
import { mockBenefits, mockCompanyLogos } from './constants';

function BudboWork() {

    const budboWorkRef = useRef()
    const [inView, setInView] = useState(false)
    useEffect(() => {
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true)
            }
        })
        obs.observe(budboWorkRef.current)
        return () => {
            obs.disconnect()
        }
    }, [budboWorkRef])

    return (
        <StyledBudboWork ref={budboWorkRef}>
            <div className="container" >
                <div className='width-wrapper col-12 col-xl-10'>
                    <div style={{ maxWidth: '850px' }}>
                        <h2 className="pb-xxl-5 mb-5 text-start text-md-center">
                            </h2>

                    </div>
                    {inView ? (
                        <img src={workImage} alt="How does budbo work?" className='d-none d-md-block work-image' width="90%" />
                    ) : 'Loading...'}

                    <div style={{ maxWidth: '850px' }}>

                        <div className="mob-img d-md-none" />
                   
                        <p className='mt-4 mb-5 text-colored'>
                            Budbo's functionality goes far beyond seed-to-sale tracking by normalizing the
                            cash-intensive marketplace,
                            powering revenue for merchants and enabling consumers to enjoy a speedy, convenient, and safe cannabis marketplace
                            .
                            <br />
                           
                        </p>
                        <ul className='benefits d-flex flex-wrap justify-content-between'>
                            {mockBenefits.map((benefit, index) => (
                                <li key={index} className="border d-flex align-items-center">
                                    <div>
                                        <div className='d-flex align-items-center'>
                                            <img src={benefit.logo} alt={index} className="me-3" />
                                            <h5>{benefit.title}</h5>
                                        </div>
                                        <p className='mt-4'>{benefit.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <h2 className='d-none d-md-block'>
                            <span className="text-primary">Budbo</span> has been featured in:</h2>
                        <div className='d-md-flex flex-wrap justify-content-center company-logos'>
                            {mockCompanyLogos.map((company, index) => (

                                inView ? (
                                    <img key={index} src={company} alt={index} className='d-block mb-5 mx-auto mx-md-2' />
                                ) : 'Loading...'
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </StyledBudboWork>
    )
}

export default BudboWork;
