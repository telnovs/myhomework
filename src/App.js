import React from 'react';
import './App.css';
import Wrapper from "./companents/wrapper/wrapper";
import NameUser from "./companents/NameUser/NameUser";
import Quality from "./companents/Quality/Quality";

class App extends React.Component {
    tasks = [
        {quality: "Добрый"},
        {quality: "Спокойный"},
        {quality: "Оптимист"}

    ];
    filter = "Добрый";
    render = () => {
        return (

            <div>
                <Wrapper/>
                <NameUser/>
                <Quality tasks={this.tasks} filter={this.filter}/>
            </div>
        );
    }
}

export default App;
