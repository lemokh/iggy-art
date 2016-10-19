import React from 'react';
import NoMatch from './NoMatch';
import { articles } from './App';
import './Post.css';

export default (props) => {
    const postId = props.params.postId;
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
  }
