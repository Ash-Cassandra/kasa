import './Banner.css'
import imgBanner from './imgBanner.webp'
import background from './background.svg'

function Banner() {
    return (
      <div className='banner'>        
        <img src={imgBanner} className='imgBanner bothPictures' alt="falaises" />
        <img src={background} className='backgroundBanner bothPictures' />
        <h1 className='titleBanner'>Chez vous, <br /> partout et ailleurs</h1>
      </div>)}

export default Banner