import React from 'react'
import { skills } from '../Data'

const Skills = () => {
  return (
    <>
    {skills.map(({title, description}, index) =>{
      return(
        <li className="skills" key={index}>
          <span className="title">{title}</span>
          <span className="desription">{description}</span>
        </li>
      );
    })}
    
    </>
  )
}

export default Skills
