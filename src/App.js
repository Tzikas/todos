import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Dashboard extends Component {
    componentDidMount(){ //STEP 1 - lifecyle events & components 
        console.log( ' this ',  this )
    }

    render() {
        return (
            <div className="App">
            </div>
        );
    }
}

export default Dashboard;
