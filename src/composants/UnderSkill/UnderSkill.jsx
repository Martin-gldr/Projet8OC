import '../UnderSkill/UnderSkill.css'
export function Underskill(props){
    
    const display =props.display
    const desc =props.desc
    const logo=props.logo
    const logo2= props.logo2
    const hide =props.hide

    return(

    <div className= {`underskill ${display}`}> 
        <p>{desc}</p>
        <div className='underskill-img-flex'>
            <img src={logo} alt="logo" />
            <img className={hide} src={logo2} alt="logo" />
        </div>
       
    </div>
        
    )
}