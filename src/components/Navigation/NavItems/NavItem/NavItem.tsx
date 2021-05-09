import { NavLink } from 'react-router-dom'
import classes from './NavItem.module.scss'

const NavItem: React.FC<{link: string}> = (props) => {
    return (
        <li className={classes.navItem}>
            <NavLink to={props.link} exact activeClassName={classes.active}>
                {props.children}
            </NavLink>
        </li>
    )
}

export default NavItem;