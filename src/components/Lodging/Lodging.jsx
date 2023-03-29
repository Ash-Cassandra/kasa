import {  useState } from "react"
import data from "../../lodging.json"
import "./Lodging.css"

function Lodging() {
    const [item, setItem] = useState(data)

// useEffect(() => {
//     fetch('/lodging.json')
//          .then((response) => response.json()
//          .then(({ Data }) => console.log(Data))
//          .catch((error) => console.log(error))
//      )
//  }, [])

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
        {/* {item.map((item) => (
        ))}
        {item.map((item) => (
            ))} */}
    </div>
     )} 

export default Lodging