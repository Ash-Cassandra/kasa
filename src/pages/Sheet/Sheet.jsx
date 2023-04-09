import React, {useContext} from "react";
import Collaps from "../../components/Collaps/Collaps";
import DataContext from "../../dataContext";

function Sheet() {
    const data = useContext(DataContext);
  console.log(data);

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
          <div className="itemImg" key={item.id}>
              <img src={item.cover} alt={item.title} />
          </div>
            <div className="itemTitle">
              <h2>{item.title}</h2>
            </div>
            <div className="itemLocation">
              <p>{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  export default Sheet;
  
