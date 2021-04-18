import React, { Component } from "react";
import '../css/App.css';
import Header from '../layout/Header';
import Body from '../layout/Body';
import Left from '../layout/Left';
import Footer from '../layout/Footer';

const styles = {
  Body:{
    display:"flex",
    alignItems: "flex-start"
  }
}

class MyRelationships extends Component {
  render() {
    return (
      <div>
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
export default MyRelationships;