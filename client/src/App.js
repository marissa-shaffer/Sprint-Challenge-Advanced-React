import React, { Component } from 'react';
import './App.css';
import Players from "./components/Players";
import axios from 'axios';
import Navbar from "./components/Navbar";

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
      <div className="App" data-testid="App">
        <div>
          <Navbar />
          <Players players={this.state.players} />
        </div>
      </div>
    );
  }
}

export default App;
