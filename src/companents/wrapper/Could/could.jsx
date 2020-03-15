import React from "react";
import classes from './could.module.css';
class  Could extends React.Component {
    render = () => {
        return (
                <div className={classes.cloud}>
                    <div className="name">
                        Тельнов Сергей
                    </div>
                    <div className="message">
                        Привет "МИР"!!!!!!!!
                        Учу я реакт !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    </div>
                    <div className="time">
                        09:05 AM
                    </div>
                </div>

        );
    }
}
export default Could;