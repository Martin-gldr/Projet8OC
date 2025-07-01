
import "../FormationCard/FormationCard.css"
export function FormationCard(props) {
    const logo = props.logo
    const name = props.name
    const date = props.date
    const desc = props.desc
return (

    <div className="formation-card">
        <img className="formation-logo" src={logo} alt={name}/>
        <p className="forma-text" ><span className="forma-title">Nom:</span> {name}, <span className="forma-title">Date:</span> {date},<br></br><span className="forma-title">Description:</span> {desc}</p>
    </div>
)
}