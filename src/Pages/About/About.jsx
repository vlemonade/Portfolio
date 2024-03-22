import React from 'react'
import './About.css'
import Info from '../../Components/info'
import Skills from '../../Components/Skills';
import Educs from '../../Components/education';
import { FaDownload } from "react-icons/fa";
import CV from '../../assets/Villaluz, Honeyvhen A. - CV.pdf'


const About = () => {
  return (
    <div className='about'>
      <div className="header">
        About <span>Me</span>
      </div>

      <div className="info">
        <div className="left">
          <div className="personalInfo">
            <h2 className='subTitle'>Personal Information</h2>

            <ul className="infoList">
                <Info/>
            </ul>

            <a href={CV} download='' className='Dbutton'>Download CV<span className='DbuttonIcon'><FaDownload /></span></a>
   
            

          </div>
          <div className="skillsBOx">
            <ul className="skillList">
              <h2 className='subTitle'>Skills</h2>
              <Skills/>
            </ul>

          </div>
        </div>

        <div className="right">
          <h2 className='subTitle'>Educational Background</h2>
          <div className="educContainer">
            <Educs/>
          </div>
        </div>


      </div>


    </div>
  )
}

export default About
