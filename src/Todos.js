import React, { Component } from 'react';
//import './todo.css';
import axios from 'axios'

//import TodoItem from './TodoItem';

class Todos extends Component {

    handleSubmit = async (e) => {        
        e.preventDefault();
        let value = this.input.value;
        this.props.postTask({description:value})
        this.input.value = ''     
    }
    
    render() {
        let todos = this.props.todos.map(todo => (
            <li key={todo._id}> 
                {todo.description}
                <button onClick={() => this.props.deleteTask(todo._id)}>Delete</button>
            </li>
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

                    <ul style={{color:this.props.color}}>
                        {todos}
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todos;


/*import React, { Component } from 'react';

const Todos = (props) => {   

    let todos = props.todos.map(todo => (
        <li key={todo._id}> 
            {todo.description}
            <button onClick={() => props.deleteTask(todo._id)}>Delete</button>
        </li>
    )) 

    return (
        <div style={{color:props.color}}>            
            <hr />
            List: 
            <ul>
                {todos}
            </ul>
        </div>
    )
}


export default Todos
*/
