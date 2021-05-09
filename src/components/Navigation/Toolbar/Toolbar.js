import Logo from '../../../UI/Logo/Logo';
import NavItems from '../NavItems/NavItems';
import classes from './Toolbar.module.scss'

const Toolbar = () => {
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