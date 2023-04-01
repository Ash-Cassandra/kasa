import {  useState, useEffect } from "react"
import item from "../../lodging.json"
import "./Lodging.css"

function Lodging() {
//     const [item, setItem] = useState([])

//     useEffect(() => {
//       fetch('http://localhost:3000/src/lodging.json')
//           .then(response => response.json())
//           .then(data => {
//               console.log(data);
//               setItem(data);
//           })
//           .catch(error => console.log(error));
//   }, []);

 return (
    <div>
        {item.map((item) => (
           <div key={item.id}>
           <div className="itemTitle">{item.title}</div>
           <div className="itemDescription">{item.description}</div>
           <div className="itemPicture">
             <img src={item.pictures} alt={item.title} />
           </div>
         </div>

        ))}
    </div>
     )} 

export default Lodging