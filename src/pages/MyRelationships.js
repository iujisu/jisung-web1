import React, { Component } from "react";
import '../css/App.css';
import Header from '../layout/Header';
import Body from '../layout/Body';
import Left from '../layout/Left';
import Footer from '../layout/Footer';
import axios from 'axios';
const styles = {
  Body:{
    display:"flex",
    alignItems: "flex-start"
  }
}

class MyRelationships extends Component {
  componentDidMount() { //클래스가 마운트 되려할 때
    console.log('MyRelationships.componentWillMount');
    const accessToken = localStorage.getItem('accessToken');
    // axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('accessToken');
    //  axios.get("http://localhost:8080/api/userInfo", {})
    //     .then((response) => {
    //        console.log("----response----") 
    //        console.log(response.data)
    //    }).catch((error) => {
    //        // 오류발생시 실행
    //        console.log("----error----") 
    //        console.log(error)
    //    }).then(()  =>{
    //        // 항상 실행
    //    });
    console.log(accessToken);
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    axios.get('http://localhost:8080/api/userInfo',null, {
    })
    .then((res) => {
      console.log(res.data)
    })
    .catch((error) => {
      console.error(error)
    })

  }


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