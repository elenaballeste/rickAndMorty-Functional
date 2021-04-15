import NavItem from './NavItem/NavItem';
import classes from './NavItems.module.scss'

function NavItems(props) {
    return (
        <ul className={classes.navItems}>
            <NavItem link="/"> Home </NavItem>
            <NavItem link="/characters"> Characters </NavItem>
        </ul>
    )
}

export default NavItems;