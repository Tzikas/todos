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
    state = {  
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

    logIn = async() => { //Add imported functions to state  
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
                <h1>Todos</h1>                                

                <div className="App-content">
                {/*Use the new fields in the state to conditonally show html*/}
                {this.state.status.error ? <p> { this.state.status.message }</p> : ''}
                {this.state.loggedIn && !this.state.status.error ? 
                  <span>
                   <p id="user">Welcome {this.state.user.username} !</p>
                  <button id="logout" onClick={this.logOut}>LogOut</button>
                  <Todos  
                        color="cornflowerblue"
                        todos={this.state.todos}
                        deleteTask={this.deleteTask}
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
                        {/*Use ref and onChange events to chage state*/}
                        <input 
                        type="password"                    
                        ref={pass => this.pass = pass} 
                        onChange = {() => this.setState({pass:this.pass.value})}/>                                
                    </div>
                    {/*Use functions added to state*/}
                    <button onClick ={this.logIn}>LogIn</button> 
                    <button onClick ={this.signUp}>signUp</button>             
                </div>
                }
              </div>
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
