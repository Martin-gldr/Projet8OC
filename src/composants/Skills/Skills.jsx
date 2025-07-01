import { Skill } from '../Skill/Skill'
import '../Skills/Skills.css'
export function Skills(){
    return(
        <>
        <h2 className='skills-title' id='3'>Mes compétences de développement WEB</h2>
        <div className='skills'>

            <div className='skills-left'>
                <Skill name="Intégration web avec HTML - CSS" 
                underSkill1="Intégrer du contenu conformément à une maquette avec HTML et CSS" underSkill2="Implémenter une interface responsive avec HTML et CSS" hide3="hide" hide4='hide'/>
                <Skill name="Gestion de projet"
                underSkill1="Rédiger les spécifications techniques d'un projet web à partir de besoins fonctionnels" underSkill2="Découper une fonctionnalités en tâches pour préparer le développement" underSkill3="Présenter la solution technique" underSkill4="Installer un environnement de développement front-end"/>
                <Skill name="Optimisation et debug"
                underSkill1="Optimiser les performances d’un site web" underSkill2="Débugger un site web grâce aux Chrome DevTools" underSkill3="Rédiger un cahier de recette pour tester un site" hide4="hide"/>
                <Skill name="Développement web - JavaScript"
                underSkill1="Récupérer les données utilisateurs dans le JavaScript via des formulaires" underSkill2="Récupérer les données utilisateurs dans le JavaScript via des formulaires" underSkill3="Récupérer les données utilisateurs dans le JavaScript via des formulaires" hide4="hide"/>

            </div>
            <div className='skills-right'>
                <Skill name="React"
                underSkill1="Configurer la navigation entre les pages de l'application avec React Router" underSkill2="Initialiser une application avec Create React App" underSkill3="Développer des éléments de l'interface d'un site web grâce à des composants React" hide4="hide"/>
                <Skill name="Développement back-end avec NodeJS"
                underSkill1="Implémenter un modèle logique de données conformément à la réglementation" underSkill2="Mettre en œuvre des opérations CRUD de manière sécurisée" underSkill3="Stocker des données de manière sécurisée" hide4="hide"/>
                <Skill name="Publication d'un site web"
                underSkill1="Déployer un site statique en ligne" hide2="hide" hide3="hide" hide4="hide"/>
                <Skill name="Utilisation d'outils de developpeur"
                underSkill1="Mettre en place une méthode de veille technologique grace a Feedly" underSkill2="Versionner son projet avec Git et Github" underSkill3="Suivre le déroulement d'un projet grâce à un outil de gestion de projet (exemple : Kanban" hide4="hide"/>
            </div>
            
            
        </div>
        </>
    )
}