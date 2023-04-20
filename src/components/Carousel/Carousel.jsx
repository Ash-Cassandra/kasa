import React, {useState} from 'react'
import nextArrow from "./nextArrow.png"
import previousArrow from "./previousArrow.png"

 function Carousel(props) {
    const [currentImg, setCurrentImg] = useState(0);

const handleNext = () => {
    setCurrentImg ((prevImg) => (prevImg === props.children.length -1 ? 0 : prevImg + 1))
}

const handlePrev = () => {
    setCurrentImg ((prevImg) => (prevImg === 0 ? props.children.length - 1 : prevImg - 1))
}
console.log(currentImg)
 return (
<div className='divCarousel'>
  {props.children[currentImg]}
        <button className='buttonCarousel btnCarouselRight' onClick={handleNext}>
            <img src={nextArrow} alt="suivant" />
        </button> 
        <button className='buttonCarousel btnCarouselLeft' onClick={handlePrev}>
            <img src={previousArrow} alt="précédent" />
        </button>
        
    </div>  
    


    )
}

export default Carousel


