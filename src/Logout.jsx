import React, { Component } from 'react';
import firebase from 'firebase';
import './css/Logout.css';

export default class Logout extends Component {
  handleSignOut(){
    firebase.auth().signOut().then(()=>{  // Sign-out successful
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
