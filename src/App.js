import { articles } from './articles';
import React, { Component } from 'react';
import jumbo from './panda-head.jpg';
import ImageList from './ImageList';
import SocialButtons from './SocialButtons';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={jumbo} alt="jumbotron" />
        </div>
        <div className="App-main-nav"></div>
        <div className="App-nav"></div>
        <ImageList articles={articles} />
        <SocialButtons />
        <div className="App-footer"></div>
      </div>
    );
  }
}
