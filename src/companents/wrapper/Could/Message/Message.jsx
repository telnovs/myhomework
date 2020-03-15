import React from "react";
import  classes from './Message.module.css';

class Message extends React.Component {
    render = () => {
        return (
            <div className={classes.message}>
                Привет "МИР"!!!!!!!!
                Учу я реакт !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            </div>
        );
    }
}

export default Message;