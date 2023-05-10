 import React, {useContext} from 'react'
import Rating from "../../components/Rating/Rating"
import Collaps from "../../components/Collaps/Collaps"
 import {useParams} from 'react-router-dom'
import Carousel from "../../components/Carousel/Carousel";
import './Sheet.css'
import DataContext from '../../dataContext'
import Error404 from '../../components/Error404/Error404';



function LodgingSheet() {
  const data = useContext(DataContext);   
  const {id} = useParams()
  
  const dataId = data.find(data => data.id === id);
if (!id || !dataId) { 
  return <Error404 /> }

else 
if (data.length === 0) {
  return (
    <div className="error" >
      <p>Une erreur est survenue, veuillez réessayer.</p>
    </div>
  );
} else
return (      
  <div className="Sheet">
    <Carousel>
        {dataId.pictures.map((picture, index) => (
          <div className="itemPictures" key={index}>
            <img
              className="itemPicture"
              src={picture}
              alt={dataId.title}
            />
          </div>
        ))}
    </Carousel>   
        <div className='containerHostTags'>
          <div className='itemInformations'>
            <div className="itemTitle">
              <p>{dataId.title}</p>
            </div>
            <div className="itemLocation">
              <p>{dataId.location}</p>
            </div>
            
            <div  >
              <ul className="itemTags">
                {dataId.tags.map(tag => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
            <div className="itemRatingHost">
              <div className="itemRating">
                <Rating rangeValue={dataId.rating} />
              </div>
            <div className="itemHost">
              <p className="itemHostName">{dataId.host.name}</p>
              <img className="itemHostImg" src={dataId.host.picture} alt={"photo de " + dataId.host.name}/>
            </div>
          </div>
        </div>
        <div className='collapsSheet'>
          <div >
            <Collaps  title="Description">
              <p className="itemDescription">{dataId.description}</p>
            </Collaps>
          </div>
          <div >
            <Collaps  title="Equipements">
              <ul className="itemEquipment">
                {dataId.equipments.map(equipment => (
                  <li key={equipment}>{equipment}</li>
                ))}
              </ul>
            </Collaps>
          </div>
        </div>
  </div>
);
} 
  
export default LodgingSheet

