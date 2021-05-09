import NavItem from './NavItem/NavItem';
import classes from './NavItems.module.scss'

const NavItems = () => {
    return (
        <ul className={classes.navItems}>
            <NavItem link="/"> Home </NavItem>
            <NavItem link="/characters"> Characters </NavItem>
        </ul>
    )
}

export default NavItems;