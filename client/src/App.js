import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {

  constructor(){
    super();
    this.state = {
      players: []
    }; 
  }

  componentDidMount(){
    axios 
    .get("http://localhost:5000/api/players")
    .then(res => {
      this.setState({
        players: res.data
      });
    })
    .catch(err => console.log("no players", err));
    console.log("componentDidMount running")
  }

  render(){
    return (
      <div>

      </div>
    );
  }
}

export default App;
