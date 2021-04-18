import React from "react";
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";
import Header from '../layout/Header';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idx: null,
            email: "",
            pw: "",
            nickname: "",
            isLogin: null
        };
    }
    //이메일 입력창 관리
    handleEmail = e => {
        this.setState({
            email: e.target.value
        });
    };
    //패스워드 입력창 관리
    handlePW = e => {
        this.setState({
            pw: e.target.value
        });
    };
    handleSubmit = e => {
        //e.preventDefault();
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
                    {/* ID 인풋창 */}
                    <div>
                    <span>ID</span>
                    <input placeholder="ID를 입력하세요" value={this.state.email} onChange={this.handleEmail}/>
                    </div>
                    {/* 비밀번호 인풋 */}
                    <div>
                    <span>비밀번호</span>
                    <input placeholder="비밀번호를 입력하세요" value={this.state.password} onChange={this.handlePW} type="password"/>
                    </div>
                    <div>
                    {/* 로그인버튼 , 회원가입버튼*/}
                    <button type="submit">로그인</button>
                    {/* 회원가입 버튼 클릭 -> /signup페이지로 이동 */}
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