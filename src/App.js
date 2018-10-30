import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'  
import {serverURL} from './config'
import Todos from './Todos.js'

class Dashboard extends Component {
    state = {  
        todos: []
    }

    componentDidMount(){  
        this.getTasks()        
    }

    getTasks = async () => {       
        let getData = await axios.get(`${serverURL}/api/tasks`)   
        this.setState({todos:getData.data})      
    }

    render() {
        return (
            <div className="App">
                <h1>Todos</h1>                
                {/*STEP 6 - passing state to props & importing components*/}
                <Todos  
                    color="cornflowerblue"
                    todos={this.state.todos}
                /> 
            </div>
        );
    }
}

export default Dashboard;
