import React, { Component } from "react";
import "./App.css";
let gameArray = [];

class App extends Component {
  state = {
    gameInfo: null  
  };

  componentDidMount() {
    this.callBackend()
      .then(res => this.handleJSON(res))
      .catch(err => console.log(err));
  }

  handleJSON = (json) => {
    console.log(json)
    gameArray = JSON.stringify(json)
    console.log(gameArray)
    this.setState({gameInfo:gameArray})
  }

  callBackend = async () => {
    const response = await fetch("express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <p>Bepis</p>
        {this.state.gameInfo}
     </div>
    );
  }
}

export default App;
