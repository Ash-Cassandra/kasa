import React, {useContext} from 'react'
import "./Cards.css"
import "../../Global.css"
import DataContext from '../../dataContext'

function Cards() {
    const data = useContext(DataContext);   

    const handleClick = (id) => {
        window.location.href=`./Sheet/${id}`

    }
    return (    

        <div>         
            <div className='container'>
            {data.map(item => (
             <figure className='card' key={item.id} onClick={() => handleClick(item.id)}>
                <div className='gradient'></div>
                <img className='imgCard' src={item.cover} alt={item.title} />
                <figcaption className='cardTitle'>{item.title}</figcaption>
            </figure>
               
            ))}</div>
        </div>
    )
}

export default Cards