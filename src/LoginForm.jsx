import React, { Component } from 'react';
import firebase from 'firebase';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = { email: '', password: '', eError: '', pError: '' };
  };
  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  };
  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  };
  handleSubmit = (event) => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
      const errorCode = error.code;
      if(errorCode === 'auth/invalid-email'){
        this.setState({eError: 'Format error',pError: ''});
      } else if(errorCode === 'auth/user-disabled'){
        this.setState({eError: 'User is disabled',pError: ''});
      } else if(errorCode === 'auth/user-not-found'){
        this.setState({eError: 'User not found',pError: ''});
      } else if(errorCode === 'auth/wrong-password'){
        this.setState({eError: '',pError: 'Wrong password'});
      }
    }).then((success)=>{
      if(success){
        global.msg.show(`Welcome back, ${this.state.email}, you've been logged in.`, {
            type: 'success',
            time: 4000
        })
      }
    });
  };
  render(){
    return(
      <form className="login__form" onSubmit={this.handleSubmit}>
        Email: <span className="le__error">{this.state.eError}</span><br/>
        <input type="text" name="email" value={this.state.email}  onChange={this.handleEmailChange}/><br/>
        Password: <span className="lp__error">{this.state.pError}</span><br/>
        <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/><br/>
        <button className="login__btn" type="submit">Log in</button>
      </form>
    );
  };
}
