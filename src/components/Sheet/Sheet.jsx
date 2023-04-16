import { useState, useEffect } from "react"
import Rating from "../Rating/Rating"
import Collaps from "../Collaps/Collaps"
import {useParams} from 'react-router-dom'


function LodgingSheet() {

  const [lodgingsData, setLodgingsData] = useState([]);
  const {id} = useParams()


  useEffect(() => {
    fetch("./lodging.json")
      .then(response => response.json())
      .then(data => {   
        data.json().then(lodgings => {
                  setLodgingsData(lodgings); 
        })      
      })
      .catch(error => console.log(error));
  }, []);
       const dataId = lodgingsData.find(item => item.id === id);
console.log("id",{id})
console.log("dataId",dataId)
console.log("lodgingsdata", lodgingsData)

if (!dataId || !Array.isArray(dataId)) {
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
            <img className="itemHostImg" src={dataId.host.picture} alt={"photo de " + lodgingsData.host.name}/>
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

// import React, {useContext} from "react"
// import Collaps from "../Collaps/Collaps"
// import DataContext from '../../dataContext'
// import "./Sheet.css"
// import Rating from "../Rating/Rating"
// import {useParams} from 'react-router-dom'
// import dataArray from '../Lodging/LodgingSorted'
// import Carousel from "../Carousel/Carousel";

// function Sheet() {
  // const data = useContext(DataContext);
  // const data = dataArray()
  // const {id} = useParams()
    // const dataId = data.find((item) => item.id === id);
    
    // console.log("data", data)
    // console.log("id", id)
    // console.log("dataId",dataId)

//   if (!data || !Array.isArray(data)) {
//     return (
//       <div>
//         <p>Une erreur est survenue, veuillez réessayer.</p>
//       </div>
//     );
//   }
// }
  //  else return (  
   
  //     <div className="Sheet">
  //       {data.map(item => (
  //         <div>
  //           <div className="itemPictures" key={item.id}> 
  //           <div>{item.pictures.map(picture => (            
  //           <div key={picture.id}>        
  //               <img className='itemPicture' src={picture} alt={item.title} />
  //           </div>  
            
  //       ))}   </div>         
  //       </div> 
  //           <div className="itemTitle">
  //             <p>{item.title}</p>
  //           </div>
  //           <div className="itemLocation">
  //             <p>{item.location}</p>
  //           </div>
  //           <div >
  //             <ul className="itemTags">
  //               {item.tags.map(tag => (
  //                 <li>{tag}</li>
  //               ))}
  //             </ul>
  //           </div>
  //           <div className="itemRatingHost">
  //             <div className="itemRating">
  //               <Rating rangeValue={item.rating} />
  //             </div>
  //             <div className="itemHost">
  //                   <p className="itemHostName">{item.host.name}</p>
  //                   <img className="itemHostImg" src={item.host.picture} alt={"photo de " + item.host.name}/>
  //             </div>
  //           </div>
  //           <div >
  //             <Collaps  title="Description">
  //               <p className="itemDescription">{item.description}</p>
  //             </Collaps>
  //           </div>
  //           <div >
  //             <Collaps  title="Equipements">
  //               <ul className="itemEquipment">
  //                 {item.equipments.map(equipment => (
  //                     <li >{equipment}</li>
  //                 ))}
  //               </ul>
  //             </Collaps>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
    
  //   );
    
  // }
  // export default Sheet;
