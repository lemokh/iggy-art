import firebase from 'firebase';
import './firebase.config';
import React, { Component } from 'react';
import jumbo from './img/panda-head.jpg';
import ImageList from './ImageList.jsx';
import AddPost from './AddPost.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import SocialButtons from './SocialButtons.jsx';
import './css/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      userRegistered: false
    };
  };
  componentWillMount(){
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
  render() {
    let llComponent;
    if(this.state.userRegistered){
      llComponent = <Logout />;
    } else {
      llComponent = <Login />
    }
    return (
      <div className="App">
        <div className="App-header"><img src={jumbo} alt="jumbotron" /></div>
        <div className="App-main-nav"><AddPost loggedIn={this.state.userRegistered}/>{llComponent}</div>
        <div className="App-nav"></div>
        <ImageList articles={this.state.articles}/>
        <SocialButtons />
        <div className="App-footer"></div>
      </div>
    );
  }
}
