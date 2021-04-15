import {Component} from 'react';
import '../css/Left.css';
class Left extends Component{
    render(){
        return (
            <div className="app-left">
                <div>MY HOME</div>
                <div>가족</div>
                <div>친구</div>
                <div>직장</div>
                <div>관계추가</div>
            </div>
        )
    }
}
     
export default Left;