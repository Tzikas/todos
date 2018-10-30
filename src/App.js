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
    deleteTask = async (id) => { 
        let deleteData = await axios.post(`${serverURL}/api/tasks/delete/${id}`)   
        this.setState({todos: this.state.todos.filter(t => t._id !== id)}) //STEP 9 - filter state 
        
    }
    render() {
        return (
            <div className="App">
                <h1>Todos</h1>                
                <Todos  
                    color="cornflowerblue"
                    todos={this.state.todos}
                    deleteTask={this.deleteTask}                    
                /> 
            </div>
        );
    }
}

export default Dashboard;
