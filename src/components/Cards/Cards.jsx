import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import "./Cards.css"
import "../../Global.css"
import DataContext from '../../dataContext'

function Cards() {
    const data = useContext(DataContext);   

    const handleClick = () => {
    }
    return (    

        <div>         
            <div className='container'>
            {data.map(item => (
                <Link to={`./Sheet/${item.id}`}onClick={() => handleClick(item.id) }key={item.id}>
             <figure className='card' key={item.id} >
                <div className='gradient'></div>
                <img className='imgCard' src={item.cover} alt={item.title} />
                <figcaption className='cardTitle'>{item.title}</figcaption>
            </figure>
               </Link>
            ))}</div>
        </div>
    )
}

export default Cards