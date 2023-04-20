 import { useState, useEffect } from "react"
import Rating from "../Rating/Rating"
import Collaps from "../Collaps/Collaps"
 import {useParams} from 'react-router-dom'
import Carousel from "../Carousel/Carousel";
import './Sheet.css'


function LodgingSheet() {

  const [lodgingsData, setLodgingsData] = useState([]);
  const {id} = useParams()
  
  useEffect(() => {
    fetch("/lodging.json")
     .then(response => response.json())
      .then(data => {   
                  setLodgingsData(data); 
        })      
      .catch(error => console.log(error));
  }, []);
       const dataId = lodgingsData.find(data => data.id === id);

if (lodgingsData.length === 0 || !dataId) {
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
        
        <div className="itemTitle">
          <p>{dataId.title}</p>
        </div>
        <div className="itemLocation">
          <p>{dataId.location}</p>
        </div>
        <div >
          <ul className="itemTags">
            {dataId.tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
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
);
} 
  
export default LodgingSheet

