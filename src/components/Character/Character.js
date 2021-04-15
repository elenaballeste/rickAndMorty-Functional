import classes from './Character.module.scss';

function Character(props) {
    return (
        <li className={classes.card} onClick={props.clickedItem}>
            <img src={props.img} alt={props.name}/>
            <p> {props.name} </p>
        </li>
    )
}

export default Character;