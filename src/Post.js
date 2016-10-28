import firebase from 'firebase';
import './firebase.config';
import React, { Component } from 'react';
import NoMatch from './NoMatch.jsx';
import './css/Post.css';

export default class Post extends Component {
  constructor(props) {
    super(props);
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
    const postId = this.props.params.postId;
    const postVal = this.state.articles;
    if(postVal[postId] === undefined){return <NoMatch />;};
    return (<div>
              <div className="Post-head-block"></div>
              <div className="Post-nav-block"></div>
              <div className="Post-thumbnail">
                <div className="Post__text">
                  <p className="Post__title">{postVal[postId].title}</p>
                  <p className="Post__description">{postVal[postId].description}</p>
                </div>
                <img className="Post__pic" src={postVal[postId].src} alt="width:90%"/>
              </div>
            </div>);
  }
}
