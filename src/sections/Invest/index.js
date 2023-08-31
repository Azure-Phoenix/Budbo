import { useState } from 'react';
import { Helmet } from 'react-helmet';
import $ from 'jquery';

import arcview from '../../assets/images/arcviewcapital.png';
import arrowSm from '../../assets/images/arrow-sm.svg';
import kcx from '../../assets/images/kcx-logos.png';
import koreconx from '../../assets/images/koreconx.png';
import logo from '../../assets/images/logolight.png';
import { GlobalStyles } from '../../shared';
import { StyledForm } from './style';




function InvestPage() {


    const [Name, setName] = useState('')
    const [Phone, setPhone] = useState('')
    const [Email, setEmail] = useState('')


    function sendInvestorInfo(event) {
        event.preventDefault();

        $.ajax({
            type: 'post',
            url: 'http://invest.budbo.io/InvestServer.php',
            data: {
                email: Email,
                name: Name,
                phone: Phone
            },
            success() {
                $('.portalForm').hide();
                $('.portalMessage').show();
            }
        })
    }
    return (

        <div className="App">
            <GlobalStyles />
            <StyledForm>
                <div className="container text-center">
                    <img src={logo} style={{}} alt="logo" className='' />
                    <div className="inner-container text-center">
                        <span className='text-colored'>Welcome to the</span>
                        <span className='text-primary d-block' style={{ fontWeight: 800 }}>Budbo Investor Portal</span>
                        <span className='text-colored portalForm'>Please fill out the form below.</span>
                       <hr />
                        <form className="mt-6 portalForm">
                             
                            <div className="flex-1">
                                <input type="text" placeholder="Name" className="border px-3" name='name'
                                    value={Name} onChange={e => setName(e.target.value)} />
                            </div>

                            <div className="flex-1 mt-6">
                                <input type="text" placeholder="Phone" className="border px-3" name='phone'
                                    value={Phone} onChange={e => setPhone(e.target.value)} />
                            </div>

                            <div className="flex-1 mt-6">
                                <input type="email" placeholder="Email" className="border px-3" name='email'
                                    value={Email} onChange={e => setEmail(e.target.value)} />
                            </div>

                            <button className="btn btn-primary py-3 fw-bold col-12" type='button' onClick={(event) => sendInvestorInfo(event)}>
                                    Submit
                                    <img src={arrowSm} alt='arrow' className='ms-1' />
                             </button>
                        </form>

                        <span className='text-primary portalMessage' style={{display: "none"}}>Thank you for your interest in Budbo. <br/> One of our team members will be in touch with you soon.</span>
                        <a href="/" className='portalMessage' style={{display: "none"}}>
                        <button className="btn btn-primary py-3 fw-bold col-12 portalMessage" type='button'>
                                    Budbo Investor Website
                                    <img src={arrowSm} alt='arrow' className='ms-1' />
                             </button>
                        </a>
                    </div>
                </div>
            </StyledForm>
        </div>
    )
}

export default InvestPage
