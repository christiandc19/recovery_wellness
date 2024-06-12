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
import HiringStaff from './routes/TrainingStaff';
import Team from './routes/Team';


ReactDOM.render(
  <BrowserRouter basename={window.location.pathname || ''} >
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route exact path='/licensing-certification' element={<LICENSING_CERTIFICATION />} />
      <Route exact path='/business-licenses' element={<BUSINESS_LICENSES />} />
      <Route exact path='/accreditation' element={<AccreditationPage />} />
      <Route exact path='/hiring-Staff' element={<HiringStaff />} />
      <Route exact path='/mission' element={<MissionPage />} />
      <Route exact path='/services' element={<ServicesPage />} />
      <Route exact path='/team' element={<Team />} />
      <Route exact path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

