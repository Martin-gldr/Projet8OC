import { useState } from 'react'
import '../Skill/Skill.css'
import { Underskill } from '../UnderSkill/UnderSkill'
export function Skill(props){
    const name = props.name
    const show = props.show

  
    return(
        <div className='skill-flex'>
            <p className='skill' onClick={show}> {name}</p>
        
           
        </div>
    )
}