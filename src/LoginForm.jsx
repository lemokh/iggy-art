import React, { Component } from 'react';
import firebase from 'firebase';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {email: '', password: ''};
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  };
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  };
  handleSubmit(event) {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
      let errorCode = error.code;
      // let errorMessage = error.message;
      if(errorCode === 'auth/invalid-email'){
        document.getElementsByClassName('lp__error')[0].innerHTML = "";
        document.getElementsByClassName('le__error')[0].innerHTML = "Format error";
      } else if(errorCode === 'auth/user-disabled'){
        document.getElementsByClassName('lp__error')[0].innerHTML = "";
        document.getElementsByClassName('le__error')[0].innerHTML = "User is disabled";
      } else if(errorCode === 'auth/user-not-found'){
        document.getElementsByClassName('lp__error')[0].innerHTML = "";
        document.getElementsByClassName('le__error')[0].innerHTML = "User not found";
      } else if(errorCode === 'auth/wrong-password'){
        document.getElementsByClassName('le__error')[0].innerHTML = "";
        document.getElementsByClassName('lp__error')[0].innerHTML = "Wrong password";
      }
    });
  };
  render(){
    return(
      <form className="login__form" onSubmit={this.handleSubmit}>
        Email: <span className="le__error"></span><br/>
        <input type="text" name="email" value={this.state.email}  onChange={this.handleEmailChange}/><br/>
        Password: <span className="lp__error"></span><br/>
        <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/><br/>
        <button className="login__btn" type="submit">Log in</button>
      </form>
    );
  };
}
