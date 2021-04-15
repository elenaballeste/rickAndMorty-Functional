import classes from './Pager.module.scss';

function Pager(props) {
    return (
        <div className={classes.pager}>
            <button onClick={props.clickedPrev} disabled={props.disabledPrev}>Prev</button>
            <p>Page {props.currentPage} of {props.totalPages}</p>
            <button onClick={props.clickedNext} disabled={props.disabledNext}>Next</button>
        </div>
    )
}

export default Pager;