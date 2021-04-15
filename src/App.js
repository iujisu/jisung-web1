import React, { Component } from "react";
import './css/App.css';
import Header from './layout/Header';
import Body from './layout/Body';
import Left from './layout/Left';
import Footer from './layout/Footer';

const styles = {
  app:{
    width : "100%",
    height: "100%",
  },
  Body:{
    display:"flex",
    alignItems: "flex-start"
  }
}

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.app}>
        <Header/>
        <div className="BodyLeyout" style={styles.Body}>
          <Left/>
          <Body/>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default App;
