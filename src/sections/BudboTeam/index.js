import React, { useEffect } from 'react';
import { useInView } from 'react-hook-inview'
import { FastCommentsCommentWidget } from 'fastcomments-react';

import { getClassNames, useMobileMode } from '../../shared';
import Accordion from './Accordion';
import { mockBudboTeam } from './mockBudboTeam';
import { StyledBudboTeam } from './styles';

function BudboTeam({ setCurrentLink }) {

    const isMobileMode = useMobileMode();
    const [ref, isVisible] = useInView({
        threshold: 1,
    })
    useEffect(() => {
        if (isVisible) {
            setCurrentLink('faq')
        }

    }, [isVisible])

    return (
        <StyledBudboTeam >
            <div className='width-wrapper col-12 col-xl-10' >
                <div style={{ maxWidth: '860px' }}>
                    {isMobileMode ? <h2 className='mb-5'>What’s Next for You and Budbo</h2>
                        :
                        <h2 className='mb-4'>
                            What’s Next for You and <br />
                            Budbo
                        </h2>
                    }
                    <ul className='roadmap position-relative'>
                        <li>
                            <h3 className='mb-3'> Early 2024</h3>
                            <p className='mb-3 mb-lg-0'>
                                Worldwide Budbo app release
                            </p>
                            <p className='mb-3 mb-lg-0'>
                                US and Canada Budbo Connect/dispensary onboarding
                            </p>
                        </li>
                        <li>
                            <h3 className='mb-3'>2024</h3>
                            <p>
                                Israel, Germany, Luxembourg Budbo Connect and dispensary onboarding
                            </p>
                            <p>
                                Budbo Trax release
                            </p>
                        </li>
                        <li>
                            <h3 className='mb-3'>2025</h3>
                            <p>On-going worldwide expansion...</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='width-wrapper'>
                <div className='team-width-container'>
                    <div className='team-wrapper'>
                        <h2 className='text-center'>Meet the <span>Budbo Team</span></h2>
                        <ul className='d-flex flex-wrap team justify-content-center'>
                            {mockBudboTeam.map((member, index) => (
                                <li key={index} className="text-center border rounded px-4 mx-3 mx-md-0 col-md-6">
                                    <span className='position-relative image-wrapper d-block border-rouned'
                                        style={{ background: `url(${member.photo}) center center/cover no-repeat` }} />
                                    <h4 style={{ fontWeight: '500' }} className="my-1">{member.name}</h4>
                                    <span className='d-inline-block'>{member.position}</span>
                                    <p className='text-start'>{member.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/*
            <div className='width-wrapper'>
                <div style={{ maxWidth: '1120px' }}>
                    <h2 id="faq" ref={ref} className={getClassNames('text-center',
                        isVisible ? 'VISIBLE!!!!!!' : '')}>FAQ</h2>
                    <ul className='faq col-12 col-md-10 mx-auto'>
                        <Accordion title='How can I place my investment?'
                            description={['You can click ',
                                <a href="/invest"
                                    onClick={() => window.dataLayer.push({ 'event': 'team' })}
                                    data-buttonname="team"
                                    data-listing_id="50096"
                                    className=''
                                    key={1} style={{ textDecoration: 'underline' }}>here</a>, ' to access our investment page.']}
                        />
                        <Accordion title='When will the fully executed subscription agreement be sent?'
                            description='The subscription agreement will be sent within a period of up to ten business days.' />
                        <Accordion title='How long does payment process time take?'
                            description='Payment will be processed within a period of up to ten days,
                             depending on your method of payment. Generally, most payments will be processed within 5 to 7 business days.' />
                        <Accordion title='Do you need to be an accredited investor?'
                            description='NO, we are accepting non-accredited investors. ' />
                        <Accordion title='Will you send a stock certificate or other "proof" of investment?'
                            description='Yes, a fully executed subscription agreement will be sent to you once you have 
                            funded your investment and our Compliance Team has cleared your account of any anti-money laundering exceptions.' />

                        <Accordion title='I made a typing mistake when signing up, how can I find a remedy for it?'
                            description='Sign into your DealMaker account, go to Your Profile to change your name and email.' />

                    </ul>
                </div>
            </div>
            <div className='width-wrapper' style={{
                margin: '54px 0 100px',
            }}>
                <div style={{ maxWidth: '1120px' }}>
                    <h2 id="comments" className={'text-center'}>Comments</h2>
                    <p className='text-colored text-center my-4'>Ask questions and share comments with the <span>Budbo team</span> below</p>
                    <FastCommentsCommentWidget tenantId="6FhAGKJwoAS" />
                </div>
            </div>
            */}
        </StyledBudboTeam>


    )
}

export default BudboTeam;
