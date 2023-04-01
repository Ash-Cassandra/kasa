import React from 'react'
import "./Cards.css"

function Cards(X) {
    return (
        <div className='card'>
            <img className='imgCard' src={X} alt={X.title} />
            <div className='cardTitle'>{X.title}title</div>
        </div>
    )
}

export default Cards