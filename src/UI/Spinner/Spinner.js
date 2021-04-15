import classes from './Spinner.module.scss'
import logo from './../../logo.svg';

function Spinner() {
    return (
        <div className={classes.SpinnerMain}>
            <img src={logo} className={classes.Spinner} alt="logo" />
        </div>
    )
}

export default Spinner;