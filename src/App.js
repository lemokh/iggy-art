import firebase from 'firebase';
import './firebase.config';
import React, { Component } from 'react';
import Jumbotron from './Jumbotron.jsx';
import ImageList from './ImageList.jsx';
import AddPost from './AddPost.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import SocialButtons from './SocialButtons.jsx';
import './css/App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      userRegistered: false
    };
  };
  render() {
    let llComponent;
    if(this.state.userRegistered){
      llComponent = <Logout />;
    } else {
      llComponent = <Login />
    }
    return (
      <div className="App">
        <div className="wrapper">
          <header><Jumbotron /></header>
          <nav>
            <div className="App-main-nav">
              <AddPost loggedIn={this.state.userRegistered}/>{llComponent}</div>
            <div className="App-nav"></div>
          </nav>
          <main><ImageList articles={this.state.articles}/></main>
          <div className="push"></div>
        </div>
        <footer>
          <SocialButtons />
          <div className="App-footer"></div>
        </footer>
      </div>
    );
  };
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({userRegistered: true});
      } else {
        this.setState({userRegistered: false});
      }
    });
    const artRef = firebase.database().ref("articles");
    artRef.on('value', (snap) => {
      this.setState({articles: snap.val()});
    });
  };
}
