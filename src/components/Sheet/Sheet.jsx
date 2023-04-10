import React, {useContext} from "react";
import Collaps from "../Collaps/Collaps";
import DataContext from "../../dataContext";
import "./Sheet.css"
import Rating from "../Rating/Rating";

function Sheet() {
    const data = useContext(DataContext);

  if (!data || !Array.isArray(data)) {
    return (
      <div>
        <p>erreur survenue</p>
      </div>
    );
  }
  
    return (
      <div className="Sheet">
        {data.map(item => (
          <div>
            <div className="itemSheet" key={item.id}>            
              {item.pictures.map(picture => (
                <div className="itemImg" key={picture.id}>
                  <img src={picture} alt={item.title} />
                </div>
              ))}  
            </div>
            <div className="itemTitle">
              <h2>{item.title}</h2>
            </div>
            <div className="itemLocation">
              <p>{item.location}</p>
            </div>
            <div className="itemTags">
              <ul>
                {item.tags.map(tag => (
                  <li>{tag}</li>
                ))}
              </ul>
            </div>
            <div className="itemRating">
              <Rating rangeValue={item.rating} />
            </div>
            <div className="itemHost">
                  <p>{item.host.name}</p>
                  <img src={item.host.picture} alt={"photo de " + item.host.name}/>
            </div>
            <div className="itemDescription">
              <Collaps title="Description">
                <p>{item.description}</p>
              </Collaps>
            </div>
            <div className="itemEquipment">
              <Collaps title="Equipements">
                <ul>
                  {item.equipments.map(equipment => (
                      <li>{equipment}</li>
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
  
