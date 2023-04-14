import React, {useContext, useState} from 'react'
import nextArrow from "./nextArrow.png"
import DataContext from "../../dataContext";





 function Carousel() {
    const data = useContext(DataContext);
    // const [currentImg, setCurrentImg] = useState(0);
  console.log(data)


  
  if (!data || !Array.isArray(data)) {
        return (
          <div>
            <p>Une erreur est survenue, veuillez réessayer.</p>
          </div>
        );
      }

 else return (
    <div className='carousel'>
    {data.map(item => (
    <div key={item.id}>
        {item.picture.map(picture => (            
            <div key={picture.id}>        
                <img className='itemPicture' src={picture} alt={item.title} />
            </div>  
        ))}
        </div>
    ))}

        {/* <img src={picture[currentImg]} alt={"actuelle"} />

        <button onClick={() => setCurrentImg((currentImg + 1))}>
            <img src={nextArrow} alt="suivant" />
        </button>  */}
    </div>  


    )
}

export default Carousel


