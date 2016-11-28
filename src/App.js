import firebase from 'firebase';
import './firebase.config';
import React, { Component } from 'react';
import Jumbotron from './Jumbotron.jsx';
import ImageList from './ImageList.jsx';
import AddPost from './AddPost.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import SocialButtons from './SocialButtons.jsx';
import AlertContainer from 'react-alert';
import './css/App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      userRegistered: false,
      likes: []
    };
    this.alertOptions = {
      offset: 14,
      position: 'top right',
      theme: 'light',
      transition: 'scale',
      time: 3000
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
  };
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <header><Jumbotron /></header>
          <nav>
            <div className="App-main-nav">
              <AddPost loggedIn={this.state.userRegistered}/>
              {this.state.userRegistered? <Logout /> : <Login />}
            </div>
            <div className="App-nav"></div>
          </nav>
          <main><ImageList articles={this.state.articles} likes={this.state.likes}/></main>
          <div className="push"></div>
        </div>
        <footer>
          <SocialButtons />
          <div className="App-footer"></div>
        </footer>
        <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />
      </div>
    );
  };
  componentDidMount(){
    firebase.database().ref("articles").on('value', (snap) => {
      if(snap.val() !== null){
      this.setState({articles: snap.val()});
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
            firebase.database().ref("votes/" + user.uid).on('value',(snapshot)=>{
              if(snapshot.val() !== null){
              const likesIds = Object.values(snapshot.val());
              const arrIds = Object.keys(this.state.articles);
              const likes = [];
              for(let i=0,len=arrIds.length;i<len;i++){
                for(let j=0,leng=likesIds.length;j<leng;j++){
                  if (arrIds[i] === Object.keys(likesIds[j])[0]){
                    if (likesIds[j][arrIds[i]] === "like"){
                         likes.push("l");
                         break;
                    } else {
                         likes.push("d");
                         break;
                    }
                  } else if (j === leng-1 && arrIds[i] !== Object.keys(likesIds[j])[0]){
                      likes.push("");
                  }
                }
              }
              this.setState({likes});
              }
            });
          }
      });
      }
    });
  };
}
