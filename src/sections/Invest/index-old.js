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


    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')


    function sendInvestorInfo(event) {
        event.preventDefault();

        $.ajax({
            type: 'post',
            url: 'https://budbo.arcviewcapital.com/InvestServer.php',
            data: {
                email: Email,
                first_name: FirstName,
                last_name: LastName
            },
            success() {

            }
        })
    }
    return (

        <div className="App">
            {/* 
            <Helmet>
            <script>{(function (w, d, t, u, k, e, p){ 
                e = d.createElement(t), p = d.getElementsByTagName(t)[0]; 
                e.async = 1; e.id = 'kcxScriptSrc'; 
                e.src = u + '?kcxClientToken=' + k + '&t=' + (new Date().getTime()); p.parentNode.insertBefore(e, p) 
            })(window, document, 'script', 'https://platform.koreconx.com/kcx-plugins/invest-now.js', 'mIJdI1jaOD7hc7HIF3VV69')}</script>
            </Helmet>
            */}
            <GlobalStyles />
            <StyledForm>
                <div className="container text-center">
                    <img src={logo} style={{}} alt="logo" className='' />
                    <div className="inner-container text-center">
                        <span className='text-colored'>Welcome to</span>
                        <span className='text-primary d-block' style={{ fontWeight: 800 }}>Budding Technologies, Inc. Investor Portal</span>
                        <hr />
                        <form className="mt-6">
                            <div className="flex-1">
                                <input type="text" placeholder="First Name" className="border px-3" name='first_name'
                                    value={FirstName} onChange={e => setFirstName(e.target.value)} />
                            </div>

                            <div className="flex-1 mt-6">
                                <input type="text" placeholder="Last Name" className="border px-3" name='last_name'
                                    value={LastName} onChange={e => setLastName(e.target.value)} />
                            </div>

                            <div className="flex-1 mt-6">
                                <input type="email" placeholder="Email" className="border px-3" name='email'
                                    value={Email} onChange={e => setEmail(e.target.value)} />
                            </div>

                            <div>
                                <p className='info'>
                                    By clicking next step you will open up the KoreConX investment widget.
                                </p>
                                <p className='info'>
                                    Budding Technologies, Inc has partnered with KoreConX, an all-in-one business platform,
                                    to help us in managing our ofering.
                                </p>
                            </div>

                            <a href="#" className="kcxHinvestProcessForm"
                                onClick={() => window.dataLayer.push({ 'event': 'invest' })}
                                data-buttonname="invest" data-listing_id="50096">
                                <button className="btn btn-primary py-3 fw-bold col-12" type='button' onClick={(event) => sendInvestorInfo(event)}>
                                    Next Step
                                    <img src={arrowSm} alt='arrow' className='ms-1' />
                                </button>
                            </a>
                        </form>

                        <img src={koreconx} style={{}} alt="logo" className='' />
                        <img src={arcview} style={{ marginLeft: '22px' }} alt="logo" className='' />
                        <img src={kcx} style={{ marginTop: '20px' }} alt="logo" className='' />

                    </div>
                </div>
            </StyledForm>
        </div>
    )
}

export default InvestPage
