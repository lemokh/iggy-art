import React, { Component } from 'react';
import firebase from 'firebase';

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
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
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
      let errorCode = error.code;
      // let errorMessage = error.message;
      if(errorCode === 'auth/invalid-email'){
        document.getElementsByClassName('p__error')[0].innerHTML = "";
        document.getElementsByClassName('e__error')[0].innerHTML = "Format error";
      } else if (errorCode === "auth/email-already-in-use"){
        document.getElementsByClassName('p__error')[0].innerHTML = "";
        document.getElementsByClassName('e__error')[0].innerHTML = " is already in use";
      } else if (errorCode === "auth/weak-password"){
        document.getElementsByClassName('e__error')[0].innerHTML = "";
        document.getElementsByClassName('p__error')[0].innerHTML = "Weak password";
      } else if (errorCode){
        document.getElementsByClassName('e__error')[0].innerHTML = errorCode;
      }
    });
  };
  render(){
    return (
      <form className="signup__form" onSubmit={this.handleSubmit}>
        Email: <span className="e__error"></span><br/>
        <input type="text" name="email" value={this.state.email}  onChange={this.handleEmailChange}/><br/>
        Password: <span className="p__error"></span><br/>
        <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/><br/>
        <button className="signup__btn" type="submit">Sign Up</button>
      </form>
    );
  };
}
