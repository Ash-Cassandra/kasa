import {  useState, useEffect } from "react"
import DataContext from "../../dataContext"


 function LodgingProvider(props) {
    const [item, setItem] = useState([])

   useEffect(() => {
      fetch("./lodging.json")
          .then(data => {
            data.json().then(lodgings => {
              setItem(lodgings);
            })
          })
          .catch(error => console.log(error));
  }, []);

return (
 
 <DataContext.Provider value={item}>
  {props.children}
 </DataContext.Provider>
)} 


export default  LodgingProvider;