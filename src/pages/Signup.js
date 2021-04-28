import React, { Component } from "react";
import Header from '../layout/Header';
import axios from 'axios';
class Signup extends Component {

  constructor(props){
    super(props);
    this.state={
      userid:'',
      pwd:''
    };
  }

  handleSubmit = (e) => {
    //e.preventDefault();

    // this.props.handleAccount({
    //   email: e.target.email.value,
    //   pwd: e.target.pwd.value,
    //   nickname: e.target.nickname.value,
    //   name: e.target.fullname.value
    // });
    console.log("==============handleSubmit==============")
    // axios.get('http://localhost:8080/member/memberadd', ({userid: this.state.userid}, {fullname: this.state.fullname} )) 
    // // { {userid: this.state.userid}, {fullname: this.state.fullname} , usergroup: this.state.usergroup, emailid: this.state.emailid, mobile: this.state.mobile, title: this.state.title }) 
    // // { userform, fullnameForm, usergroupForm, emailidForm, mobileForm, titleForm }) 
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
    /*
    const post ={
      id:this.state.userid,
      pwd:this.state.pwd
    }
    */
    const post ={
      userId:"rtwerqwqwe",
      userName:"1111"
    }
    axios.post('http://localhost:8080/api/memberadd', post)
    .then((response) => {
      if (response.status >= 200 && response.status <= 204) {
        alert('가입에 성공하셨습니다!');
        console.log("----handleSubmit----")
        this.props.history.push("/MyRelationships");
      }
    })
    .catch(() => {
      alert('이미 가입된 아이디입니다.');
    })
  }

  
  render() {
    return(
      <div className="signup-form-wrapper">
        <Header/>
        <form onSubmit={this.handleSubmit} method="post">
          <table>
            <tbody>
              <tr>
                <th>이름</th>
                <td><input type='text' name='fullname' /></td>
              </tr>
              <tr>
                <th>아이디</th>
                <td><input type='text' name='userid' value="test" /></td>
              </tr>
              <tr>
                <th>비밀번호</th>
                <td><input type='password' name='password'  value="1234" /></td>
              </tr>
              <tr>
                <th>비밀번호확인</th>
                <td><input type='password' name='re_password'  value="1234" /></td>
              </tr>
              <tr>
                <th>전화번호</th>
                <td><input type='text' name='phone_number' /></td>
              </tr>
              <tr>
                <th>Eamail</th>
                <td><input type='text' name='email' /></td>
              </tr>
             
            </tbody>
          </table>
          <button type="submit">가입</button>
        </form>
      </div>
    )
  }
}

export default Signup;