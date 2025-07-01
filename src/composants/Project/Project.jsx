import '../Project/Project.css'
export function Project (props){
    const logo = props.logo
    const desc = props.desc
    const skillOne = props.skillOne
    const skillTwo = props.skillTwo
    const skillThree = props.skillThree
    const skillThreeClass = props.skillThreeClass
    const link = props.link
    const pb = props.pb
    return(
        <a className='project' href={link}>
            
            <div className='project-title'> 
                <img src={logo} alt={desc}/>
                <p className='description'><span className='project-subtitle'>Description : </span> <br></br> {desc} <br></br></p>
                <p className='description'><span className='project-subtitle'>Problématiques : </span> <br></br> {pb}</p>

            </div> 
            
            <div>

                <span className='project-subtitle'>Skills :</span> 
                <div className='project-skill'>
                    <img src={skillOne} alt='skill one'/> 
                    <img src={skillTwo} alt ='skill two' />
                    <img src={skillThree} className={skillThreeClass} alt='skill three' />
                </div>
            </div>
            
            
        </a>
    )
}