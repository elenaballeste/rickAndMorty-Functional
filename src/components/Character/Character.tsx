import React from 'react';
import classes from './Character.module.scss';

const Character: React.FC<{ name: string, img: string, key: number;  clickedItem: () => void }> = (props) => {
    return (
        <li className={classes.card} onClick={props.clickedItem}>
            <img src={props.img} alt={props.name}/>
            <p> {props.name} </p>
        </li>
    )
}

export default Character;