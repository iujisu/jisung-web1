import {Component} from 'react';
import '../css/Body.css';
import Simulation from "../Simulation";
class Body extends Component{
    render(){
        return (
            <div className="app-body">
              <Simulation/>
            </div>
        )
    }
}
      
export default Body;