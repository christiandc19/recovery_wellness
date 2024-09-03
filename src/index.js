import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MissionPage from './routes/MissionPage'
import ServicesPage from './routes/ServicesPage'
import ContactPage from './routes/ContactPage'
import LICENSING_CERTIFICATION from './routes/Licensing_Certification_Page';
import BUSINESS_LICENSES from './routes/Business_Licenses_Page';
import AccreditationPage from './routes/AccreditationPage';
import MarketResearch from './routes/Market_Research_Page';
import MarketStrategies from './routes/Marketing_Strategies_Page';
import Investing from './routes/Investing_Page';
import InsuranceContracting from './routes/Insurance_Contracting_Page';
import GrantWriting from './routes/Grant_Writing_Page';
import Facilitating from './routes/Facilitating_Page';
import OperationalStandards from './routes/Operational_Standards_Page';
import HiringStaff from './routes/HiringStaff';
import WritePolicies from './routes/Write_Policies_Page';

import RealEstateAdvisement from './routes/Real_Estate_Advisement_Page';
import TrainingStaff from './routes/TrainingStaff';
import Team from './routes/Team';
import PrivacyPolicyPage from './routes/PrivacyPolicyPage';

ReactDOM.render(
  <BrowserRouter basename={window.location.pathname || ''} >
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route exact path='/licensing-certification' element={<LICENSING_CERTIFICATION />} />
      <Route exact path='/business-licenses' element={<BUSINESS_LICENSES />} />
      <Route exact path='/market-research' element={<MarketResearch />} />
      <Route exact path='/marketing-strategies' element={<MarketStrategies />} />
      <Route exact path='/real-estate-advisement' element={<RealEstateAdvisement />} />
      <Route exact path='/investing' element={<Investing />} />
      <Route exact path='/insurance-contracting' element={<InsuranceContracting />} />
      <Route exact path='/grant-writing' element={<GrantWriting />} />
      <Route exact path='/facilitating' element={<Facilitating />} />
      <Route exact path='/operational-standards' element={<OperationalStandards />} />
      <Route exact path='/hiring-staff' element={<HiringStaff />} />
      <Route exact path='/write-policies' element={<WritePolicies />} />


      <Route exact path='/accreditation' element={<AccreditationPage />} />
      <Route exact path='/training-staff' element={<TrainingStaff />} />
      <Route exact path='/mission' element={<MissionPage />} />
      <Route exact path='/services' element={<ServicesPage />} />
      <Route exact path='/team' element={<Team />} />
      <Route exact path='/contact' element={<ContactPage />} />

      <Route exact path='/privacy-policy' element={<PrivacyPolicyPage />} />


    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

