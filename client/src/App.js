import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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
    console.log(this.state.players);
    return (
      <div>

      </div>
    );
  }
}

export default App;
