import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'  
import {serverURL} from './config'

class Dashboard extends Component {
    state = {  
        todos: []
    }

    componentDidMount(){  
        this.getTasks()        
    }

    getTasks = async () => {       
        let getData = await axios.get(`${serverURL}/api/tasks`)   
        this.setState({todos:getData.data}) //STEP 5 - setState        
    }

    render() {
        return (
            <div className="App">
            </div>
        );
    }
}

export default Dashboard;
