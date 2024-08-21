import React from "react";
import '../components/Skills.css'
import iconGit from '../media/git-svgrepo-com.svg'
import iconJS from '../media/javascript-svgrepo-com.svg'
import iconCSS from '../media/css-3-svgrepo-com.svg'
import iconHTML from '../media/html-5-svgrepo-com.svg'
import iconTypescript from '../media/typescript-svgrepo-com.svg'
import iconSQL from '../media/postgresql-svgrepo-com.svg'
import iconNode from '../media/node-js-svgrepo-com.svg'
import iconReact from '../media/react-svgrepo-com.svg'
import iconAPI from '../media/api-svgrepo-com.svg'
import iconAgile from '../media/agile-svgrepo-com.svg'

const skills = [
    { id: 1, name: 'Git', icon: iconGit },
    { id: 2, name: 'JavaScript', icon: iconJS },
    { id: 3, name: 'CSS', icon: iconCSS },
    { id: 4, name: 'HTML', icon: iconHTML },
    { id: 5, name: 'TypeScript', icon: iconTypescript },
    { id: 6, name: 'SQL', icon: iconSQL },
    { id: 7, name: 'Node.js', icon: iconNode },
    { id: 8, name: 'React', icon: iconReact },
    { id: 9, name: 'APIs', icon: iconAPI },
    { id: 10, name: 'Agile Methodologies', icon: iconAgile },
  ];

function Skills(){

return(

<div className="skills">
      <h2 className="skills-title">Skills</h2>
      <ul className="skills-list">
        {skills.map(skill => (
          <li key={skill.id} className="skill-item">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>

)

}

export default Skills;