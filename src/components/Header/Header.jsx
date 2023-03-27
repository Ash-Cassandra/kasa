import {Link} from 'react-router-dom'
import kasaLogo from './kasaLogo.svg'
import './Header.css'

 function Header () {
    return (
        <header>
            <img src={kasaLogo} className="kasaLogo" alt="logo de kasa" />
                <nav className='navLink'>
                    <Link to="/">ACCUEIL</Link>
                    <Link to="./About">A PROPOS</Link>
                </nav>
        </header>
    )
}

export default Header