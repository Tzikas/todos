import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios'  
import {serverURL} from './config'
import Todos from './Todos.js'
import Loader from 'react-loader-spinner'

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
    state = {  
        todos: [],
        loggedIn: false,
        status: { error:false, message:'' },
        name: null,
        pass: null,
        user: {},
        loading: true                  
    }
    componentDidMount(){  
        this.getTasks()
        this.loggedIn()
        setTimeout(() => this.setState({ loading: false }), 1500); 
        
    }
    myTasks = async() => { //Used filter to filter my tasks from all tasks 
        this.setState({todos: this.state.todos.filter(t => t.owner === this.state.user._id)})      
    }

    getTasks = async () => {       
        let getData = await axios.get(`${serverURL}/api/tasks`)   
        this.setState({todos:getData.data})      
    }
    deleteTask = async (task) => { 
        console.log('id',task.id)
        let deleteData = await axios.post(`${serverURL}/api/tasks/delete/${task.id}`)   
        this.setState({todos: this.state.todos.filter(t => t._id !== task.id)})         
    }
    postTask = async (value) => {  
        value.doneyet = false;
        let todo = await postTask(value) 
        this.setState({ todos: [...this.state.todos, todo] }) 
    }
    editTask = async (newTask, val) => {        
        let task = await editTask(newTask.id, {description:val, doneyet:newTask.doneyet})
        const updatedTasks = this.state.todos.map((obj, index) => {
           if( obj._id !== task._id ){
            return obj 
          } else {
            obj.doneyet = newTask.doneyet
            if(val){
              obj.description = val;
            }
            return obj
          }
        });
        this.setState({todos:updatedTasks})
    }

    logIn = async() => { 
        let result = await logIn({ username:this.state.name, password:this.state.pass })
        result.error ? this.setState({status: result } ) :  this.setState({user: result, loggedIn:true, status:{ error:false, message:'' } })    
    }

    signUp = async() => {
        let result = await signUp({ username:this.state.name, password:this.state.pass })
        result.error ? this.setState({status: result } ) :  this.setState({user: result, loggedIn:true, status:{ error:false, message:'' } }) 
    }

    logOut = async() => {
        await logOut()
        this.setState({loggedIn:false, user:null, name:'', pass:'' })      
    }
    loggedIn = async() => {
        let result = await loggedIn()
        result.error ? this.setState({status: result } ) :  this.setState({user: result, loggedIn:true, status:{ error:false, message:'' } }) 
    }


    render() {
       return (
        <div className="App">
            {this.state.loading ? 
            <div className='sweet-loading'>
              <Loader type="Plane" color="#00BFFF" height="100" width="100"/>         
            </div>
             : 
          <div className="App-content">
            {this.state.status.error ? <p> { this.state.status.message }</p> : ''}
            {this.state.loggedIn && !this.state.status.error ? 
              <span>
              <p id="user">Welcome {this.state.user.username} !</p>
              <button id="logout" onClick={this.logOut}>LogOut</button>
              <Todos 
                todos={this.state.todos}
                postTask={this.postTask} 
                editTask={this.editTask} 
                deleteTask={this.deleteTask}                
                myTasks={this.myTasks}  
                getTasks={this.getTasks}
              />
              </span>
            : <div>
                <p>Not logged in...</p>
                <div>
                  <input 
                    type="text"
                    ref={user => this.name = user}                  
                    onChange = {() =>  this.setState({name:this.name.value})}
                    />
                </div>
                <div>                  
                  <input 
                    type="password"                    
                    ref={pass => this.pass = pass}
                    onChange = {() => this.setState({pass:this.pass.value})}/>                                
                </div>
                  <button onClick ={this.logIn}>LogIn</button>
                  <button onClick ={this.signUp}>signUp</button> 

            </div> }
          </div>
          }
        </div>
       );
    }
}

export default Dashboard;


