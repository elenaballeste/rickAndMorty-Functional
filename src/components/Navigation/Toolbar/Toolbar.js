import Logo from '../../../UI/Logo/Logo';
import NavItems from '../NavItems/NavItems';
import classes from './Toolbar.module.scss'

function Toolbar(props) {
    return (
        <header className={classes.toolbar}>
            <Logo />
            <nav>
                <NavItems />
            </nav>
        </header>
    )
}

export default Toolbar;