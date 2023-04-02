import './Banner.css'
import imgBanner from './imgBanner.webp'
import background from './background.svg'

function Banner() {
    return (
      <div className='banner'>        
        <img src={imgBanner} className='imgBanner bothPictures' alt="falaises" />
        <img src={background} className='backgroundBanner bothPictures' alt="#"/>
        <h1 className='titleBanner'>Chez vous, <br /> partout et ailleurs</h1>
        <h1 className='titleBannerDesktop'>Chez vous, partout et ailleurs</h1>
      </div>)}

export default Banner