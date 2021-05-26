import React from "react";
import { BrowserRouter as Router,useHistory  } from "react-router-dom";
import Header from '../layout/Header';
import axios from 'axios';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userSeq: null,
            userId: "",
            userPassword: "",
            isLogin: null
        };
    };
    
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
        axios.post("http://localhost:8080/api/authenticate", {
            username: "유지성",
            password: "climbx@1633"
        }).then((response) => {
             // response 
            console.log(response.data)
            const  accessToken  = response.data;
            localStorage.setItem('accessToken', accessToken.token);
             // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
            
            //console.log(axios.defaults.headers.common['Authorization'])
            //history.push('/MyRelationships');
            this.props.history.push("/MyRelationships");

        }).catch((error) => {
            // 오류발생시 실행
            console.log("----error----") 
            console.log(error)
        }).then(()  =>{
            // 항상 실행

        });
       // this.props.history.push("/MyRelationships");
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