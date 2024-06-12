import React from 'react'
// import InsuranceSection from '../insurance/InsuranceSection';
import WeDo from '../../components/Whatwedo/Whatwedo';
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';
import Team from '../../components/team/TeamSection'
// import HomeSection1 from '../homeSection1/HomeSection1';
import HomeMission from '../mission/HomeMission';
import Licensing from '../licensing/Licensing';
import Marketing from '../marketing/Marketing';
// import InsuranceHome from '../insurance/InsuranceHome';



const home = () => {
  return (
    <>
    <WeDo />
    {/* <HomeSection1 /> */}
    <Licensing />
    <Marketing />
    <Whoweare />
    <Team />
    <HomeMission />
    {/* <InsuranceSection />
    <InsuranceHome /> */}
    <ContactForm />
    </>
  )
}

export default home
