import React from 'react'
import WeDo from '../../components/Whatwedo/Whatwedo';
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';
// import Team from '../../components/team/TeamSection'
import HomeMission from '../mission/HomeMission';
import Licensing from '../licensing/Licensing';
import Marketing from '../marketing/Marketing';



const home = () => {
  return (
    <>
    <WeDo />
    <Licensing />
    <Marketing />
    <Whoweare />
    {/* <Team /> */}
    <HomeMission />
    <ContactForm />
    </>
  )
}

export default home
