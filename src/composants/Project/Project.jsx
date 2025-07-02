import { useState} from 'react'
import '../Project/Project.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHandPointer as pointer} from '@fortawesome/free-solid-svg-icons'
export function Project (props){
    const logo = props.logo
    const desc = props.desc
    const skillOne = props.skillOne
    const skillTwo = props.skillTwo
    const skillThree = props.skillThree
    const skillThreeClass = props.skillThreeClass
    const link = props.link
    const pb = props.pb
    const pres = props.pres
    let [displayI, setDisplayI]= useState('')
    let [displayT, setDisplayT]= useState('hide')
    
        
    
    
    

    function change(){
        if (displayI === ''){
            setDisplayI('hide')
            setDisplayT('')
        }else if(displayT === ''){
            setDisplayI('')
            setDisplayT('hide')
        }
    }

    return(
        <div className='project'>

            <div className='project-title'>
                <div className='title-padding'>
                    <img src={logo} alt={desc} />
                    <div onClick={change} className={`text-presentation ${displayT}`}>
                        <p className='description'><span className='project-subtitle'>Description : </span> <br></br> {desc} <br></br></p>
                        <p className='description'><span className='project-subtitle'>Problématiques : </span> <br></br> {pb}</p>
                         <a href={link}><span className='project-subtitle'>Lien :</span> {link} <br></br> </a>
                    </div>
                </div>

                <img onClick={change} id='presentation' className={displayI} src={pres} alt={desc} />
                <i className={displayI}> <FontAwesomeIcon icon={pointer} /></i>

            </div>

            <div className='end-padding'>
              

                <span className='project-subtitle'>Skills :</span>
                <div className='project-skill'>
                    <img src={skillOne} alt='skill one' />
                    <img src={skillTwo} alt='skill two' />
                    <img src={skillThree} className={skillThreeClass} alt='skill three' />
                </div>
            </div>


        </div>
    )
}