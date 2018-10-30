import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'  //STEP 3  
import {serverURL} from './config'

class Dashboard extends Component {
    state = {  //STEP 2 - state & stateful component 
          todos: []
    }

    componentDidMount(){ //STEP 1 - lifecyle events & components 
        this.getTasks()        
    }

    getTasks = async () => { //STEP 4 - function appears in state         
        let getData = await axios.get(`${serverURL}/api/tasks`)         
    }

    render() {
        return (
            <div className="App">
            </div>
        );
    }
}

export default Dashboard;
