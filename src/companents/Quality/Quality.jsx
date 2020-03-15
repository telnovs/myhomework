import React from "react";
import classes from "./Quality.module.css";


const Quality = (props) => {
    let taskElements = props.tasks.map((task, id) => {
        if (id === 0) {
            return <li key={task.id} className={classes.color}>{task.quality}</li>;
        } else {
            return <li key={task.id}>{task.quality}</li>;
        }

    });
    return (
        <div className={classes.wrapper}>
            <h2>Мои личные качества</h2>
            <ul>{taskElements}</ul>
        </div>
    )
}
export default Quality;