import React, { Component } from "react";
import {BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';
import './css/App.css';
import Login from "./pages/Login";
import MyRelationships from './pages/MyRelationships';

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
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/MyRelationships" component={MyRelationships} />
          <Redirect from="/" exact to="/login" />
        </Switch>
      </Router>
      </div>
    );
  }
}
export default App;
