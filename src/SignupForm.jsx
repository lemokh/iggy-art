import React, { Component } from 'react';
import firebase from 'firebase';

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      eError: '',
      pError: ''
    };
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
        this.setState({eError: 'Format error',pError: ''});
      } else if (errorCode === "auth/email-already-in-use"){
        this.setState({eError: 'is already in use',pError: ''});
      } else if (errorCode === "auth/weak-password"){
        this.setState({eError: '',pError: 'Weak password'});
      } else if (errorCode){
        this.setState({eError: errorCode, pError: ''});
      }
    });
  };
  render(){
    return (
      <form className="signup__form" onSubmit={this.handleSubmit}>
        Email: <span className="e__error">{this.state.eError}</span><br/>
        <input type="text" name="email" value={this.state.email}  onChange={this.handleEmailChange}/><br/>
        Password: <span className="p__error">{this.state.pError}</span><br/>
        <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/><br/>
        <button className="signup__btn" type="submit">Sign Up</button>
      </form>
    );
  };
}
