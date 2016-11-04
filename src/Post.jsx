import firebase from 'firebase';
import './firebase.config';
import React, { Component } from 'react';
import NoMatch from './NoMatch.jsx';
import './css/Post.css';

export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  };
  componentDidMount() {
    const artRef = firebase.database().ref("articles");
    artRef.on('value', (snap) => {
      this.setState({articles: snap.val()});
    })
  };
  render(){
    const artArray = [];
    for (let key in this.state.articles) {
      if (this.state.articles.hasOwnProperty(key)) {
        artArray.unshift(this.state.articles[key]);
      }
    }
    const postId = this.props.params.postId;
    if(artArray[postId] === undefined){return <NoMatch />;};
    return (<div>
              <div className="Post-head-block"></div>
              <div className="Post-nav-block"></div>
              <div className="Post-thumbnail">
                <div className="Post__text">
                  <p className="Post__title">{artArray[postId].title}</p>
                  <p className="Post__description">{artArray[postId].description}</p>
                </div>
                <img className="Post__pic" src={artArray[postId].src} alt="width:90%"/>
              </div>
            </div>);
  }
}
