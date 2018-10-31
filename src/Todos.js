import React, { Component } from 'react';
import axios from 'axios'
import Todo from './Todo'
import './todo.css'; 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6



class Todos extends Component { 

    handleSubmit = async (e) => {        
        e.preventDefault();
        let title = this.title.value;
        let description = this.description.value; //Edit input fields 
        this.props.postTask({
            description,
            title
        })
        this.title.value = ''     
        this.description.value = ''     
        
    }
    
    render() {
        let todos = this.props.todos.map(todo => (            
            <Todo 
                key= {todo._id}
                description = {todo.description}
                title = {todo.title}
                deleteTask = {this.props.deleteTask}
                editTask={this.props.editTask} 
                doneyet={todo.doneyet}                 
                id= {todo._id}
            />
        )) 

        return (
            <div>
                <h1 className="site-header">Todos</h1>
                <div className="row">
                    <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input
                                id="input-title"
                                className="input-title"
                                type="text"
                                autoComplete="off"
                                ref={input => {this.title = input}}
                                placeholder="Add a todo..."/>
                            {/* add input field */} 
                            <input 
                                id="input-description"
                                className="input-description"
                                type="textarea"
                                ref={input => {this.description = input}}
                                placeholder="Add a description..."/>                                                        <input className="btn" id="submit" type="submit" value="submit"/>
                        </div>
                    </form>
                    <br />
                    <br />
                    <button onClick ={this.props.myTasks}>My Tasks</button> 
                    <button onClick ={this.props.getTasks}>All Tasks</button> 
                    <p className="app-description">
                        Double click to Edit.  
                    </p>
                    <div className="todo-container" >
                        <ReactCSSTransitionGroup 
                            transitionName="example"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}>
                            {todos}
                        </ReactCSSTransitionGroup>
          
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todos;



