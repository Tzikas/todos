import React, { Component } from 'react';
import axios from 'axios'
import Todo from './Todo'
import './todo.css'; //Add css


class Todos extends Component { 

    handleSubmit = async (e) => {        
        e.preventDefault();
        let value = this.input.value;
        this.props.postTask({description:value})
        this.input.value = ''     
    }
    
    render() {
        let todos = this.props.todos.map(todo => (
            //Add another component for each individual Todo
            <Todo 
                key= {todo._id}
                description = {todo.description}
                title = {todo.title}
                deleteTask = {this.props.deleteTask}
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



