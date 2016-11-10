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
  render(){
    const articles = Object.values(this.state.articles);
    articles.reverse();
    const postId = this.props.params.postId;
    if(articles[postId] === undefined){return <NoMatch />;};
    return (<div>
              <div className="Post-head-block"></div>
              <div className="Post-nav-block"></div>
              <div className="Post-thumbnail">
                <div className="Post__text">
                  <p className="Post__title">{articles[postId].title}</p>
                  <p className="Post__description">{articles[postId].description}</p>
                </div>
                <img className="Post__pic" src={articles[postId].src} alt="width:90%"/>
              </div>
            </div>);
  };
  componentDidMount() {
    const artRef = firebase.database().ref("articles");
    artRef.on('value', (snap) => {
      this.setState({articles: snap.val()});
    })
  };
}
