import '../Carousel/Carousel.css'
import booki from '../../assets/Booki.png'
import Kasa from '../../assets/LOGO-R.svg'
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
import bluel from '../../assets/bluel.svg'
import livre from '../../assets/livre.svg'
import qwenta from '../../assets/qwenta.svg'
import nina from '../../assets/nina.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong as FRL } from '@fortawesome/free-solid-svg-icons'
import { faLeftLong as FLL } from '@fortawesome/free-solid-svg-icons'
import { Project } from '../Project/Project'
import { useRef, useState, useEffect } from 'react'

export function Carousel() {
    const ref = useRef(null);
    let [resize, setResize] = useState('')
    let [largeur, setLargeur] = useState(0);
    let [transform, setTransform] = useState({ transform: 'translateX(Ovw)' })
    let [currentProject, setCurrentProject] = useState(0)
    let [newLargeur, setNewLargeur] = useState(0)
    let [screenSize, setSreenSize] = useState(0)
    let [nbClick, setNbClick] = useState(2)



    useEffect(() => {
        setSreenSize(window.innerWidth)
        getSreenWidth()
        window.addEventListener('resize', getSreenWidth)

        function getSreenWidth() {

            setSreenSize(window.innerWidth)
            if (screenSize < 1025 & screenSize > 950) {
                setNbClick(3)
            } else if (screenSize < 768) {
                setNbClick(5)
            } else if(screenSize< 950 & screenSize > 768){
                setNbClick(4)
            }else {
                setNbClick(2)
            }


        }
    })
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 960px)');

        const handleMediaChange = (e) => {
            if (e.matches) {
                setCurrentProject(currentProject = 0)
                setTransform(transform = { transform: 'translateX( 0px)' })
            }
        };

        mediaQuery.addEventListener('change', handleMediaChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaChange);
        };
    }, [])




    useEffect(() => {

        setLargeur(ref.current.getBoundingClientRect().width)


    })
    useEffect(() => {

        setNewLargeur(ref.current.getBoundingClientRect().width)

    })

    useEffect(() => {


        const handleResize = () => {
            if (currentProject = !0) {
                setCurrentProject(0);
                setTransform({ transform: 'translateX(0px)' });
            };
        }



        setTimeout(() => {
            window.addEventListener("resize", handleResize)
            setResize('')
            setLargeur(largeur = newLargeur)


            return () => {

                window.removeEventListener("resize", handleResize)

            }
        }, 300);
    },[])



    function prevProject() {
        if (currentProject <= 0) {
            setCurrentProject(currentProject = nbClick)
            setTransform(transform = { transform: 'translateX(-' + (largeur + 20) * currentProject + 'px)' })
        }
        else {
            setCurrentProject(currentProject = currentProject - 1)
            setTransform(transform = { transform: 'translateX(-' + (largeur + 20) * currentProject + 'px)' })
        }

    }
    function nextProject() {
        if (currentProject >= nbClick) {
            setCurrentProject(currentProject = 0)
            setTransform(transform = { transform: 'translateX( 0px)' })

        } else {
            setCurrentProject(currentProject = currentProject + 1)
            setTransform(transform = { transform: 'translateX(-' + (largeur + 20) * currentProject + 'px)' })
        }


    }
    return (
        <div className='view-box'>
            <div className={`carousel ${resize}`} style={transform}>
                <div ref={ref}><Project  desc="Integration css et html d'un site de renseignements touristique." logo={booki} skillOne={html} skillTwo={css} skillThreeClass='hide' link="https://github.com/Martin-gldr/projet2OC.git"/></div>
                <div ><Project  desc="Developpement frontend d'un site d'architect d'interieur." logo={bluel} skillOne={html} skillTwo={css} skillThree={js} link="https://github.com/Martin-gldr/Projet3OC.git" /></div>
                <div ><Project  desc="Débuggage et optimisation SEO d'un site de photographie" logo={nina} skillOne={lighthouse} skillTwo={SEO} skillThree={debug} link="https://github.com/Martin-gldr/Projet-4OC.git"/></div>
                <div ><Project  desc="Developpement frontend, en utlisant React+vite d'un site de location" logo={Kasa} skillOne={booki} skillTwo={ReactL} skillThree={js} link="https://github.com/Martin-gldr/Projet-5OC.git"/></div>
                <div ><Project  desc="Developpement du backend d'un site de notation de livre" logo={livre} skillOne={nodejs} skillTwo={express} skillThree={mongodb} link="https://github.com/Martin-gldr/projet6OC.git" /></div>
                <div ><Project  desc="Gestion du projet pour le developpement d'un site de creation et exportation de menus" logo={qwenta} skillOne={notion} skillTwo={feedly} skillThree={scrum}/></div>


            </div>
            <div className='btn-flex'>
                 <button onClick={prevProject} className='prev' aria-label='prev'> <FontAwesomeIcon icon={FLL} /></button>
            <button onClick={nextProject} className='next' aria-label='next'><FontAwesomeIcon icon={FRL} /></button>
            </div>
           
        </div>
    )
}
