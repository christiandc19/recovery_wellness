import React from 'react'
import './TeamSection.css'
import Fade from 'react-reveal/Fade';


import Team1 from '../../assets/team_1.webp'
import Team2 from '../../assets/team_2.webp'
import Team3 from '../../assets/team_3.webp'
import Team4 from '../../assets/team_4.webp'


const TeamSection = () => {
    return (
        <>
        <div className='team-main'>
        <div className='team-section container'>
        <h1>Meet The Core</h1>
        <p>At Recovery & Wellness Solutions, our dedicated team is committed to providing exceptional care and support to help you achieve your health and wellness goals. Each team member brings unique expertise and a shared passion for promoting holistic recovery and well-being. Get to know the individuals who are here to guide you on your journey.</p>
            <div>
                <div className="content">

                    <div className='team-right'>
                    <Fade top>
                    <div className='team-thumbnail'>
                        <img src={ Team1 } alt="Ashley" loading="lazy"/>
                        <div>                   
                        <p><b>Team Member</b><br/><i>Position</i></p>
                        </div>
                    </div>
                    </Fade>


                    <Fade top>
                    <div className='team-thumbnail'>
                    <img src={ Team2 } alt="Honey" loading="lazy"/>
                    <p><b>Team Member</b><br/><i>Position</i></p>
                    </div>
                    </Fade>


                    <Fade bottom>
                    <div className='team-thumbnail'>
                    <img src={ Team3 } alt="Anthony" loading="lazy"/>
                        <p><b>Team Member</b><br/><i>Position</i></p>  
                    </div>
                    </Fade>    

                    <Fade bottom>
                    <div className='team-thumbnail'>
                    <img src={ Team4 } alt="Imelda" loading="lazy"/>
                        <p><b>Team Member</b><br/><i>Position</i></p>  
                    </div>
                    </Fade>                 


                    </div>
                </div>
            </div>
        </div>


</div>

</>
    )
}

export default TeamSection
