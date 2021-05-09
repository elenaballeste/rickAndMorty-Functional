import classes from './Pager.module.scss';

const Pager: React.FC<{
    currentPage: string,
    totalPages: number,
    disabledPrev: boolean,
    disabledNext:boolean,
    clickedPrev: React.MouseEventHandler,
    clickedNext: React.MouseEventHandler }> = (props) => {
    return (
        <div className={classes.pager}>
            <button onClick={props.clickedPrev} disabled={props.disabledPrev}>Prev</button>
            <p>Page {props.currentPage} of {props.totalPages}</p>
            <button onClick={props.clickedNext} disabled={props.disabledNext}>Next</button>
        </div>
    )
}

export default Pager;