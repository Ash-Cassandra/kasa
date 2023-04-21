import Collaps from '../../components/Collaps/Collaps.jsx'
import imgAbout from './imgAbout.svg'
import './About.css'


function About() {
    return (
        <div>
            <img src={imgAbout} className='imgAbout' alt="montagnes" />
            <div className='aboutText'>
                <Collaps title="Fiabilité ">
                    <p className='description'>Les annonces postées sur Kasa garantissent une fiabilité titale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </Collaps>
                <Collaps title="Respect">
                    <p className='description'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Collaps>
                <Collaps title="Service">
                    <p className='description'>Nos équipe se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </Collaps>
                <Collaps title="Sécurité">
                    <p className='description'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyaheurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standarts sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </Collaps>
            </div>
        </div>
    )
}

export default About