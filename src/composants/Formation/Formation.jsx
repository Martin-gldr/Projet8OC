
import "../Formation/Formation.css"
import OC from '../../assets/Logo_OpenClassrooms.png'
import { FormationCard } from "../FormationCard/FormationCard"
export function Formation() {
return (
    <div className="formation" id="2">
     <h2>Ma formation</h2>
     <FormationCard logo={OC}name='Open Classrooms' date='07/2025' desc='Apprentissage du métier de developpeur Web sur des connaissances front-end, backend , SEO, gestion de projet.' />
    </div>
)
}