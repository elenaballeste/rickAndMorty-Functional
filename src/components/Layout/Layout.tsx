import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.scss';

const Layout: React.FC = (props) => {
    return (
        <div>
            <Toolbar />
            <main className={classes.content}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;