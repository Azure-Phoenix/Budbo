import React, { useState } from 'react';
import { GlobalStyles, StyledWhiteWrapper, useMobileMode } from './shared';
import axios from 'axios';
import useSWR from 'swr';

const ActionBar = React.lazy(() => import('./components/ActionBar'));
const Header = React.lazy(() => import('./components/Header'));
const BillionDollar = React.lazy(() => import('./sections/BillionDollar'));
const BlockchainTechnology = React.lazy(() => import('./sections/BlockchainTechnology'));
const BudboApp = React.lazy(() => import('./sections/BudboApp'));
const BudboConnect = React.lazy(() => import('./sections/BudboConnect'));
const BudboTeam = React.lazy(() => import('./sections/BudboTeam'));
const BudboTrax = React.lazy(() => import('./sections/BudboTrax'));
const BudboUnique = React.lazy(() => import('./sections/BudboUnique'));
const BudboWork = React.lazy(() => import('./sections/BudboWork'));
const Buildings = React.lazy(() => import('./sections/Buildings'));
const Footer = React.lazy(() => import('./sections/Footer'));
const Legalization = React.lazy(() => import('./sections/Legalization'));
const Main = React.lazy(() => import('./sections/main'));
const Reasons = React.lazy(() => import('./sections/Reasons'));
const WhatChanged = React.lazy(() => import('./sections/WhatChanged'));


function App() {
  const [currentLink, setCurrentLink] = useState(null);

  const mobileMode = useMobileMode();
  const iframeHeight = mobileMode ? '191px' : '620px';
  return (
    <div className="App">
      <GlobalStyles />
      <Header currentLink={currentLink} />
      <Main />
      <div className='position-relative'>
        <div className='d-none d-xxl-block'>
          <ActionBar />
        </div>


        <StyledWhiteWrapper style={{
          marginTop: 50
        }}>
          
          <div className='d-md-none'>

            <ActionBar />
          </div>
          <Reasons setCurrentLink={setCurrentLink} />

          <BillionDollar setCurrentLink={setCurrentLink} />
          <WhatChanged />
          <BudboWork />

        </StyledWhiteWrapper>


        <Buildings setCurrentLink={setCurrentLink} />

        <StyledWhiteWrapper>
          <BudboApp />
          <BudboConnect />
          <BudboTrax />
        </StyledWhiteWrapper>

        <BlockchainTechnology setCurrentLink={setCurrentLink} />

        <StyledWhiteWrapper>
          <BudboUnique setCurrentLink={setCurrentLink} />
        </StyledWhiteWrapper>

        <Legalization setCurrentLink={setCurrentLink} />

        <StyledWhiteWrapper className='exception-mobile'>
          <div className="container">
            <BudboTeam setCurrentLink={setCurrentLink} />
          </div>
        </StyledWhiteWrapper>
      </div>
      <Footer />
    </div>
  );
}

export default App;
