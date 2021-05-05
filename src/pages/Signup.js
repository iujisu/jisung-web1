import React, { Component } from "react";
import Header from '../layout/Header';
import axios from 'axios';
class Signup extends Component {

  constructor(props){
    super(props);
    this.state={
      file: null,
      user_name:'',
      user_id:'',
      password:'',
      re_password:'',
      phone_number:'',
      email:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.addCustomer = this.addCustomer.bind(this);
  }
  handleSubmit(e) {
    console.log("==============handleSubmit==============");
    e.preventDefault()
    this.addCustomer().then((response) => {
      console.log(response);
      if (response.status >= 200 && response.status <= 204) {
        //     alert('가입에 성공하셨습니다!');
        //     console.log("----handleSubmit----")
        //     this.props.history.push("/MyRelationships");
         }
    }).catch((error) => {
      console.log(error);
      //alert('이미 가입된 아이디입니다.');
    })
    // const post ={
    //   userId:"rtwerqwqwe",
    //   userName:"1111"
    // }
    // axios.post('http://localhost:8080/api/memberadd', post)
    // .then((response) => {
    //   if (response.status >= 200 && response.status <= 204) {
    //     alert('가입에 성공하셨습니다!');
    //     console.log("----handleSubmit----")
    //     this.props.history.push("/MyRelationships");
    //   }
    // })
    // .catch(() => {
    //   alert('이미 가입된 아이디입니다.');
    // })
  }

  handleFileChange(e) {
    this.setState({
    file: e.target.files[0],
    fileName: e.target.value
    }); 
  }

  handleValueChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  addCustomer(){
    const url = 'http://localhost:8080/api/memberadd';
    const formData = new FormData();
    formData.append('file', this.state.file);
    formData.append('userName', this.state.user_name);
    formData.append('userId', this.state.user_id);
    formData.append('password', this.state.password);
    formData.append('phoneNumber', this.state.phone_number);
    formData.append('email', this.state.email);
    const config = {
      headers: {
        'Accept': 'application/json, application/*+json',
        'Content-Type': 'multipart/form-data'
      }
    }
    return axios.post(url, formData, config)
  }
    

    
  render() {
    return(
      <div className="signup-form-wrapper">
        <Header/>
        <form onSubmit={this.handleSubmit}  method="post">
          <table>
            <tbody>
              <tr>
                <th>이미지</th>
                <td><input type="file" name="file" onChange={this.handleFileChange} /></td>
              </tr>
              <tr>
                <th>이름</th>
                <td><input type='text' name='user_name'  value={this.state.user_name} onChange={this.handleValueChange}  /></td>
              </tr>
              <tr>
                <th>아이디</th>
                <td><input type='text' name='user_id'  value={this.state.user_id} onChange={this.handleValueChange} /></td>
              </tr>
              <tr>
                <th>비밀번호</th>
                <td><input type='password' name='password'  value={this.state.password} onChange={this.handleValueChange}  /></td>
              </tr>
              <tr>
                <th>비밀번호확인</th>
                <td><input type='password' name='re_password'  value={this.state.re_password} onChange={this.handleValueChange}  /></td>
              </tr>
              <tr>
                <th>전화번호</th>
                <td><input type='text' name='phone_number'value={this.state.phone_number} onChange={this.handleValueChange}  /></td>
              </tr>
              <tr>
                <th>Eamail</th>
                <td><input type='text' name='email'value={this.state.email} onChange={this.handleValueChange}  /></td>
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