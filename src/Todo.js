import React, { Component } from 'react';
import './todoItem.css'; //Add CSS

const Todo = (props) => {  //New component.  Stateless for now...     
        return (
            <div className="item-container">
                <div className="title-container">
                    {props.description}
                </div>                    
                <div className="delete-btn" onClick={() => props.deleteTask(props.id)}>
                    <i className="fas fa-times delete-icon"></i>
                </div>
            </div>
        )
    }


export default Todo;

