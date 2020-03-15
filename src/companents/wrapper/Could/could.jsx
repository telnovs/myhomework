import React from "react";
import classes from './could.module.css';
import Name from "./Message/Name/Name";
import Message from "./Message/Message";
import Time from "./Message/time/Time";

class Could extends React.Component {
    render = () => {
        return (
            <div className={classes.cloud}>
                <Name/>
                <Message/>
                <Time/>
            </div>

        );
    }
}

export default Could;