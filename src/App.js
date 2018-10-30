import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'  
import {serverURL} from './config'
import Todos from './Todos.js'
import {  
  signUp,
  logIn,
  logOut,
  loggedIn
} from './authActions'
import { 
  getTasks,
  postTask,
  deleteTask,
  editTask
} from './todoActions'



class Dashboard extends Component {
    state = {  //Add additional fields to this state
        todos: [],
        loggedIn: true,
        status: { error:false, message:'' },
        name: null,
        pass: null,
        user: {},
        
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
        this.setState({todos: this.state.todos.filter(t => t._id !== id)})         
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





Object.assign(window, { //Lets actions be called from console 
  getTasks,
  postTask,
  logIn,
  signUp,
  logOut,
  loggedIn,
  deleteTask,
  editTask,
}); 
