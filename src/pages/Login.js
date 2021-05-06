import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../layout/Header';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userSeq: null,
            userId: "",
            userPassword: "",
            isLogin: null
        };
    }
    //이메일 입력창 관리
    handleUserid = (e) => {
        this.setState({
            userId: e.target.value
        });
    };
    //패스워드 입력창 관리
    handleUserPassword = (e) => {
        this.setState({
            userPassword: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("----handleSubmit----")
        this.props.history.push("/MyRelationships");
    };

    render() {
        return (
            <div>
                <Header/>
                <Router>
                <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <span>ID</span>
                        <input placeholder="ID를 입력하세요" value={this.state.userId} onChange={this.handleUserid}/>
                    </div>
                    <div>
                        <span>비밀번호</span>
                        <input placeholder="비밀번호를 입력하세요" value={this.state.userPassword} onChange={this.handleUserPassword} type="password"/>
                    </div>
                    <div>
                        <button type="submit">로그인</button>
                        <button onClick={() => this.props.history.push("/signup")}>회원가입 </button>
                    </div>
                </form>
                </div>
                </Router> 
            </div>
     
        );
      }
}

export default Login;