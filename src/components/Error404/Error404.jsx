import React from 'react'
import {Link} from 'react-router-dom'
import './Error404.css'


const Error404 = () => {
    return (
        <div>
            <h1>404</h1>
            <p className='textError404'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'accueil</Link>

        </div>
    )
}

export default Error404