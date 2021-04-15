import logoImage from '../../assests/images/rick-morty-logo.png'
import { NavLink } from 'react-router-dom'
import classes from './Logo.module.scss'

function Logo() {
    return (
        <NavLink to="/" exact className={classes.logo}>
            <img src={logoImage} alt="RickAndMortyLogo"/>
        </NavLink>
    )
}

export default Logo;