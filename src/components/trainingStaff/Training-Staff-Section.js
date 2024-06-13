import React from 'react'
import './Training-Staff-Section.css'
import { BsDot } from "react-icons/bs";

import TrainingStaff1 from "../../assets/training_staff.webp";
import TrainingStaff2 from "../../assets/training_staff2.webp";

const trainingStaffSection = () => {
    return (
        <>



<div className="trainingStaffSection-container">

      <div className='trainingStaffSectionHeader container'>
      <h1>Training Staff</h1>
              <p>Creating a comprehensive training program for staff in the field of Recovery & Wellness Solutions involves several key components. This training program should cover essential knowledge and skills, promote a supportive work environment, and ensure staff are equipped to provide high-quality care to clients. Here’s a structured outline for the content:  
            </p>
      </div>

        <div className="wrapper-content container">
          <div className="trainingStaffSection-left">
            <img src={TrainingStaff1} alt="nurse" loading="lazy" />
          </div>

          <div className="trainingStaffSection-right">
            <h1>Introduction to Recovery & Wellness</h1>
            <h2>Overview of Recovery and Wellness</h2>
              <ul>
                <li><p><span><BsDot /></span>Definition and principles of recovery</p></li>
                <li><p><span><BsDot /></span>The holistic approach to wellness (physical, mental, emotional, social, and spiritual health)</p></li>
                <li><p><span><BsDot /></span>Importance of personalized care plans</p></li>
              </ul>
              <h2>Understanding Recovery Models</h2>
              <ul>
                <li><p><span><BsDot /></span>Medical model vs. recovery model</p></li>
                <li><p><span><BsDot /></span>Evidence-based practices in recovery</p></li>
                <li><p><span><BsDot /></span>The role of peer support in recovery</p></li>
              </ul>
              <h1>Understanding Addictions and Mental Health</h1>
              <h2>Substance Use Disorders</h2>
              <ul>
                <li><p><span><BsDot /></span>Types of substances and their effects</p></li>
                <li><p><span><BsDot /></span>The cycle of addiction</p></li>
                <li><p><span><BsDot /></span>Co-occurring disorders</p></li>
              </ul>
              <h2>Mental Health Disorders</h2>
              <ul>
                <li><p><span><BsDot /></span>Common mental health conditions (depression, anxiety, PTSD, etc.)</p></li>
                <li><p><span><BsDot /></span>Symptoms and diagnostic criteria</p></li>
                <li><p><span><BsDot /></span>Impact of mental health on overall wellness</p></li>
              </ul>
          </div>
        </div>



        <div className="wrapper-content container wrap-reverse">

          <div className="trainingStaffSection-right">
            <h1>Communication and Interpersonal Skills</h1>
            <h2>Effective Communication Techniques</h2>
              <ul>
                <li><p><span><BsDot /></span>Active listening</p></li>
                <li><p><span><BsDot /></span>Empathy and validation</p></li>
                <li><p><span><BsDot /></span>Motivational interviewing</p></li>
              </ul>
              <h2>Building Therapeutic Relationships</h2>
              <ul>
                <li><p><span><BsDot /></span>Establishing trust and rapport</p></li>
                <li><p><span><BsDot /></span>Maintaining professional boundaries</p></li>
                <li><p><span><BsDot /></span>Cultural competence and sensitivity</p></li>
              </ul>
              <h1>Crisis Intervention and De-escalation</h1>
              <h2>Identifying Crisis Situations</h2>
              <ul>
                <li><p><span><BsDot /></span>Early warning signs of a crisis</p></li>
                <li><p><span><BsDot /></span>High-risk behaviors and triggers</p></li>
              </ul>
              <h2> Intervention Strategies</h2>
              <ul>
                <li><p><span><BsDot /></span>De-escalation techniques</p></li>
                <li><p><span><BsDot /></span>Safety planning</p></li>
                <li><p><span><BsDot /></span>Crisis intervention protocols</p></li>
              </ul>
          </div>

          <div className="trainingStaffSection-left">
            <img src={TrainingStaff2} alt="nurse" loading="lazy" />
          </div>


        </div>








      </div>







        </>
    )
}

export default trainingStaffSection
