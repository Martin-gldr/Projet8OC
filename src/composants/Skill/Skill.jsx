import { useState } from 'react'
import '../Skill/Skill.css'
export function Skill(props){
    const name = props.name
    const underSkill1 =props.underSkill1
    const underSkill2 =props.underSkill2
    const underSkill3 =props.underSkill3
    const underSkill4 =props.underSkill4
    const hide1 = props.hide1
    const hide2 = props.hide2
    const hide3 = props.hide3
    const hide4 = props.hide4

    let [display, setDiplay] = useState('hide')

    function show(){
        if(display === 'hide'){
            setDiplay(display = '')

        }else if (display === ''){
            setDiplay('hide-transition')
            setTimeout(()=>{
                setDiplay('hide')}, 250) 
        }
    }

    return(
        <div className='skill-flex'>
            <p className='skill' onClick={show}> {name}</p>
            <div className='underskill-flex'> 
            <p className= {`underskill ${hide1} ${display}`}> {underSkill1}</p>
            <p className={`underskill ${hide2} ${display}`}>{underSkill2}</p>
            <p className={`underskill ${hide3} ${display}`}>{underSkill3}</p>
            <p className={`underskill ${hide4} ${display}`}>{underSkill4}</p>

            </div>
           
        </div>
    )
}