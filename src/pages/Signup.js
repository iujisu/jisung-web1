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
      user_password:'',
      re_password:'',
      phone_number:'',
      user_email:''
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
      console.log("======response=====");
      console.log(response.data);
      if (response.data.success == true) {
          alert(response.data.message)
         // this.props.history.push("/MyRelationships");
      }else{
         alert(response.data.message)
        // this.props.history.push("/login");
      }
    }).catch((error) => {
      console.log(error);
      alert('error 가입된 아이디입니다.');
      //this.props.history.push("/login");
    });
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
    const url = 'http://localhost:8080/api/memberJoin';
    const formData = new FormData();
    formData.append('file', this.state.file);
    formData.append('userName', this.state.user_name);
    formData.append('userId', this.state.user_id);
    formData.append('userPassword', this.state.user_password);
    formData.append('phoneNumber', this.state.phone_number);
    formData.append('userEmail', this.state.user_email);
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
                <td><input type='password' name='user_password'  value={this.state.user_password} onChange={this.handleValueChange}  /></td>
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
                <td><input type='text' name='user_email'value={this.state.user_email} onChange={this.handleValueChange}  /></td>
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