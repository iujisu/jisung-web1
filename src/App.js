import React, { Component } from "react";
import './App.css';
import Simulation from "./Simulation";

const styles = {
  app:{
    width : "100%",
    height: "100%",
    
  }
}

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.app}>
        <Simulation/>
      </div>
    );
  }
}
export default App;
