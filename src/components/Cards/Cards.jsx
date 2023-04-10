import React, {useContext} from 'react'
import "./Cards.css"
import DataContext from '../../dataContext'

function Cards() {
    const data = useContext(DataContext);

    console.log(data)
    return (
        <div>
            {data.map(item => (
                <div className='container'>
             <div className='card' key={item.id}>
                <div className='gradient'></div>
                <img className='imgCard' src={item.cover} alt={item.title} />
                <div className='cardTitle'>{item.title}</div>
            </div>
            </div>   
            ))}
        </div>
    )
}

export default Cards