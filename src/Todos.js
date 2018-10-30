import React, { Component } from 'react';
import axios from 'axios'
import Todo from './Todo'
import './todo.css'; 


class Todos extends Component { 

    handleSubmit = async (e) => {        
        e.preventDefault();
        let value = this.input.value;
        this.props.postTask({description:value})
        this.input.value = ''     
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
                                ref={input => {this.input = input}}
                                placeholder="Add a todo..."/>
                        </div>
                    </form>
                    <br />
                    <br />
                    {/* call myTasks here*/}
                    <button onClick ={this.props.myTasks}>My Tasks</button> 
                    <button onClick ={this.props.getTasks}>All Tasks</button> 
                    <p className="app-description">
                        Double click to Edit.  
                    </p>
                    <div className="todo-container" >
                        {todos}
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todos;



