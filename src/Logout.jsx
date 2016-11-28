import React, { Component } from 'react';
import firebase from 'firebase';
import './css/Logout.css';

export default class Logout extends Component {
  handleSignOut(){
    firebase.auth().signOut().then(()=>{
      window.location.reload();
      document.getElementsByClassName("login__modal")[0].style.display = "none";
    },(error)=>{
      // An error happened.
    });
  };
  render(){
    return (
      <button className="app__logout" onClick={this.handleSignOut}>Log Out</button>
      );
  };
}
