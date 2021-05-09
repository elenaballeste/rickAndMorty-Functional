import classes from './Spinner.module.scss'
import logo from './../../logo.svg';

const Spinner: React.FC = () => {
    return (
        <div className={classes.SpinnerMain}>
            <img src={logo} className={classes.Spinner} alt="logo" />
        </div>
    )
}

export default Spinner;