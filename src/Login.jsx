import React, { Component } from 'react';
import './css/Login.css';
import './css/Signup.css';
import logo from './img/logo.png';
import LoginForm from './LoginForm.jsx';
import SignupForm from './SignupForm';

export default class Register extends Component {
  openLoginModal(){
    document.getElementsByClassName("signup__modal")[0].style.display = "none";
    document.getElementsByClassName("login__modal")[0].style.display = "block";
  };
  closeLoginModal(){
    document.getElementsByClassName("login__modal")[0].style.display = "none";
  };
  openSignUpModal(){
    document.getElementsByClassName("login__modal")[0].style.display = "none";
    document.getElementsByClassName("signup__modal")[0].style.display = "block";
  };
  closeSignUpModal(){
    document.getElementsByClassName("signup__modal")[0].style.display = "none";
  };
  render(){
    return (<div>
              <div className="app__login" onClick={this.openLoginModal}>Login / Register</div>
              <div className="login__modal">
                <div className="login__modal__content">
                  <span className="login__modal__close" onClick={this.closeLoginModal}>x</span>
                  <h1 className="login__modal__title">Welcome to Iggy-Art</h1>
                  <img className="login__logo" src={logo} alt='width: 260px'/>
                  <LoginForm />
                  <p>Do not have an account ? <span onClick={this.openSignUpModal}>Sign Up</span></p>
                </div>
              </div>
              <div className="signup__modal">
                <div className="signup__modal__content">
                  <span className="signup__modal__close" onClick={this.closeSignUpModal}>x</span>
                  <h1 className="signup__modal__title">Become a member</h1>
                  <img className="login__logo" src={logo} alt='width: 260px'/>
                  <SignupForm />
                  <p>Have an account ? <span onClick={this.openLoginModal}>Login</span></p>
                </div>
              </div>
            </div>
            );
  };
  componentDidMount(){
    window.onclick = (event) => {
      if (event.target === document.getElementsByClassName("login__modal")[0]) {
          document.getElementsByClassName("login__modal")[0].style.display = "none";
      }
      else if (event.target === document.getElementsByClassName("signup__modal")[0]) {
          document.getElementsByClassName("signup__modal")[0].style.display = "none";
      } else if (event.target === document.getElementsByClassName("add__post__modal")[0]) {
          document.getElementsByClassName("add__post__modal")[0].style.display = "none";
      }
    }
  };
}
