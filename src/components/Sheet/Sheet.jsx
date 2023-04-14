import React, {useContext} from "react";
import Collaps from "../Collaps/Collaps";
import DataContext from "../../dataContext";
import "./Sheet.css"
import Rating from "../Rating/Rating";
// import Carousel from "../Carousel/Carousel";

function Sheet() {
    const data = useContext(DataContext);

  if (!data || !Array.isArray(data)) {
    return (
      <div>
        <p>Une erreur est survenue, veuillez réessayer.</p>
      </div>
    );
  }
  
   else return (
      <div className="Sheet">
        {data.map(item => (
          <div>
            <div className="itemPictures" key={item.id}> 
            <div>{item.pictures.map(picture => (            
            <div key={picture.id}>        
                <img className='itemPicture' src={picture} alt={item.title} />
            </div>  
            
        ))}   </div>         
        </div> 
            <div className="itemTitle">
              <p>{item.title}</p>
            </div>
            <div className="itemLocation">
              <p>{item.location}</p>
            </div>
            <div >
              <ul className="itemTags">
                {item.tags.map(tag => (
                  <li>{tag}</li>
                ))}
              </ul>
            </div>
            <div className="itemRatingHost">
              <div className="itemRating">
                <Rating rangeValue={item.rating} />
              </div>
              <div className="itemHost">
                    <p className="itemHostName">{item.host.name}</p>
                    <img className="itemHostImg" src={item.host.picture} alt={"photo de " + item.host.name}/>
              </div>
            </div>
            <div >
              <Collaps  title="Description">
                <p className="itemDescription">{item.description}</p>
              </Collaps>
            </div>
            <div >
              <Collaps  title="Equipements">
                <ul className="itemEquipment">
                  {item.equipments.map(equipment => (
                      <li >{equipment}</li>
                  ))}
                </ul>
              </Collaps>
            </div>
          </div>
        ))}
      </div>
    );
  }
  export default Sheet;
  
