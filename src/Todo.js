import React, { Component } from 'react';
import './todoItem.css'; 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6


class Todo extends Component {     
    state = {
        isEdit: false,
        details: '',
        showDetails: false 
    }


    edit = async (e) => {        
        this.setState({
            isEdit: !this.state.isEdit
        })
    }
    handleCheck = (e) => { 
        this.props.editTask({id: this.props.id, doneyet : !this.props.doneyet} )
    }

    handleDelete = (e) => {
        this.props.deleteTask(this.props)
    }
    handleEdit = (e) => {
        let val = this.input.value
        this.props.editTask(this.props, val)  
        this.setState({
            isEdit: !this.state.isEdit
        })
    }
    showDetails = () => { //Add action to show description. 
        this.setState({
            details:this.props.description,
            showDetails:!this.state.showDetails
        })
        
    }
    renderTitle = () => {
        return this.state.isEdit
            ?   <input
                    ref={input => this.input = input}
                    className="edit-title"
                    type="text"
                    defaultValue={this.props.title}
                    onBlur={this.handleEdit}
                    autoFocus
                />
            :   <p 
                    className={this.props.doneyet ? "title-crossed" : "title"}
                    onDoubleClick={this.props.doneyet ? null : this.edit}>
                        {this.props.title}
                </p>
    }

    renderCheckIcon = () => {
        return this.props.doneyet
            ? <i className="fas fa-check check-icon"></i>
            : null
    }

    render() {
        return (
            <div>
            <div className="item-container">
                <div className="completed-check-box" onClick={this.handleCheck}>
                    {this.renderCheckIcon()}
                </div>
                <div className="title-container">
                    {this.renderTitle()}
                </div>
                <div className="delete-btn" onClick={this.handleDelete}>
                    <i className="fas fa-times delete-icon"></i>
                </div>
                 <div className="details-btn" onClick={this.showDetails}>
                    <i className="fas fa-ellipsis-v description-icon"></i>
                </div>
            </div>
            <div className={"details " + (this.state.showDetails ? 'show' : 'hidden')}>{this.state.details}</div>
            </div>

        )
    }
}

export default Todo;


