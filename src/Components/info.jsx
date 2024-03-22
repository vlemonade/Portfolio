import React from 'react'
import {personalInfo} from '../Data'
import '../Pages/About/About.css'

const info = () => {
  return (
    <>

    {personalInfo.map(({title, description}, index) => {
      return(
        <li className="personalinfo" key={index}>
          <span className="title">{title}</span>
          <span className="description">{description}</span>
        </li>
      );
    })}
    </>
  )
}

export default info
