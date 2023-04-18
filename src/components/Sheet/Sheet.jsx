 import { useState, useEffect } from "react"
import Rating from "../Rating/Rating"
import Collaps from "../Collaps/Collaps"
 import {useParams} from 'react-router-dom'


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
console.log("id",{id})
 console.log("dataId",dataId)

if (lodgingsData.length === 0 || !dataId) {
  return (
    <div>
      <p>Une erreur est survenue, veuillez réessayer.</p>
    </div>
  );
} else
return (      
  <div className="Sheet">
        <div className="itemPictures" key={dataId.id}> 
          {dataId.pictures.map(picture => (
            <div key={picture.id}>        
              <img className='itemPicture' src={picture} alt={dataId.title} />
            </div>  
          ))}   
        </div>         
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

