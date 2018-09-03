import React, { Component } from 'react';
import './App.css';
import './login.css'
import axios from 'axios'

class App extends Component {
  
  constructor(props)
  {
    super(props)
    this.serviceURL = `http://${window.location.hostname}:3001`
    this.buttonText="Login";
    this.state={
      adminUserName:'',
      adminPassword:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin=this.handleLogin.bind(this)
  }
  handleChange(event)
  {    
    this.setState({ [event.target.name] : event.target.value });
  }
  
  handleLogin(event)
  {
    axios.post(this.serviceURL+'/api/v1/auth',{
        username:this.state.adminUserName,
        password:this.state.adminPassword      
    }).then(function(response){
        console.log(response);
    }).then(function(body) {
      console.log(body);
    });  
    
  }
  render() {
    return (
    <div id="loginContainer" >
      <input type="text" name="adminUserName" id="adminUserName" value={this.state.userName} onChange={this.handleChange}/>
      <input type="password" name="adminPassword" id="adminPassword" value={this.state.password} onChange={this.handleChange}/>
      <button type="submit" name="adminLogin" id="adminLogin" onClick={this.handleLogin}>{this.buttonText}</button>
    </div>
    );
  }
}

export default App;
