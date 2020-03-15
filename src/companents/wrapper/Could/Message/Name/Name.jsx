import React from "react";
import classes from './Name.module.css';

class Name extends React.Component {
    render = () => {
        return (

            <div className={classes.name}>
                Тельнов Сергей
            </div>
        );
    }
}

export default Name;