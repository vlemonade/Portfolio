import React from 'react'
import { educations } from '../Data'

const education = () => {
  return (
    <>
    {educations.map(({icon, year, school, description}, index) =>{
      return(
        <li className="educations" key={index}>
          <span>{icon}</span>

          <p className="year">{year}</p>
          <h3 className="school">{school}</h3>
          <p className="desription">{description}</p>
        </li>
      );
    })}
    
    </>
  )
}

export default education
