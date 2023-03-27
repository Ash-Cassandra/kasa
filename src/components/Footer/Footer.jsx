import kasaLogoBlack from './kasaLogoBlack.svg'
import copyright from './copyright.svg'
import './Footer.css'

function Footer () {
    return (
        <footer>
            <img src={kasaLogoBlack} className="kasaLogoBlack" alt="logo de kasa" />,
            <img src={copyright} className="copyright" alt="kasa, tous droits reservés" />"
        </footer>
    )
}

export default Footer