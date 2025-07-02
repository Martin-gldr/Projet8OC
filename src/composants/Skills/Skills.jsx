import { useState } from 'react'
import { Skill } from '../Skill/Skill'
import '../Skills/Skills.css'
import { Underskill } from '../UnderSkill/UnderSkill'
import ReactL from '../../assets/react.svg'
import html from '../../assets/html.svg'
import css from '../../assets/CSS.png'
import nodejs from '../../assets/Nodejs.svg'
import js from '../../assets/Javascript.svg'
import express from '../../assets/express.svg'
import mongodb from '../../assets/mongodb.svg'
import SEO from '../../assets/SEO.png'
import feedly from'../../assets/feedly.svg'
import lighthouse from '../../assets/lighthouse.png'
import notion from '../../assets/notion.svg'
import debug from '../../assets/debug.png'
import scrum from '../../assets/scrum.png'

export function Skills(){
 let [display, setDisplay]= useState('')
 let [display2, setDisplay2]= useState('')
 let [display3, setDisplay3]= useState('')

    function show(){
        if(display === ''){
            setDisplay('hide-transition')
            setTimeout(() => {
                setDisplay('hide')
            }, 350);

        }else if(display ==='hide'){
            setDisplay('')
        }

    }
    function show2(){
        if(display2 === ''){
            setDisplay2('hide-transition')
            setTimeout(() => {
                setDisplay2('hide')
            }, 350);

        }else if(display2 ==='hide'){
            setDisplay2('')
        }

    }  function show3(){
        if(display3 === ''){
            setDisplay3('hide-transition')
            setTimeout(() => {
                setDisplay3('hide')
            }, 350);

        }else if(display3 ==='hide'){
            setDisplay3('')
        }

    }
    return(
        <>
        <h2 className='skills-title' id='3'>Mes compétences de développement WEB</h2>
        <div className='skills'>

            <div className='flex'>
                <Skill show={show} name="Mes compétences FRONTEND" />
                <Underskill display= {display} desc=" HTML+CSS -- Integrations / Mise en place d'un site responsive / Création d'animations" logo={html} logo2={css}/>
                <Underskill display= {display} desc=" JAVASCRIPT -- Gestion des évènements utilisateurs / Manipulation du DOM / Gestion de formulaires" logo={js} hide="hide"/>
                <Underskill display= {display} desc=" REACT -- Création et gestion de composants REACT/ Gestion de navigation avec REACT ROUTER "logo={ReactL} hide="hide"/>
                <Underskill display= {display} desc=" SEO+DEBUGGAGE -- Debuggage avec ChromeDev tools / Optimisation SEO avec lighthouse / Optimisation accécibilté" logo={lighthouse} logo2={debug}/>
            </div>

            <div className='flex'> 
                <Skill show={show2}name="Mes compétences BACKEND" /> 
                <Underskill display= {display2} desc="NODEJS + EXPRESS -- Implémentation serveur + routes CRUD / Création et gestion de l'authentification+connexion" logo={nodejs} logo2={express}/>
                <Underskill display= {display2} desc="MONGO-DB -- Initialisation de base de donnée NoSql / Création de modèle de donnée Mongoose " logo={mongodb}hide="hide"/>
                

            </div>
            <div className='flex'>
                <Skill show={show3} name="Mes compétences en gestion"/> 
                <Underskill display= {display3} desc="SRCUM -- Gestion de projet agile / Rédaction de fiche technique / Veille technique" logo={scrum} logo2={feedly}/>
                <Underskill display= {display3} desc="NOTION -- Maitrise outil notion / Création de Kanban" logo={notion} hide='hide'/>

            </div>
            


           
            
            
                
               
            
           
            
            
        </div>
        </>
    )
}