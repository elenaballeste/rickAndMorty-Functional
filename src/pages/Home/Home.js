import logo from './../../logo.svg';
import classes from './Home.module.scss';

function Home() {
  return (
    <div className={classes.Home}>
      <img src={logo} className={classes.HomeLogo} alt="logo" />
      <p>Elena Ballesté Izuzquiza</p>
    </div>
  )
}

export default Home;
