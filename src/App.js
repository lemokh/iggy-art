import React, { Component } from 'react';
import './App.css';
import jumbo from './panda-head.jpg';
import ImageList from './ImageList';
import { articles } from './articles';

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
        <div className="App-social-buttons">
          <ul className="social__nav">
            <li><a href="https://www.facebook.com/dan.volosnikov"><i className="fa fa-facebook fa-lg"></i></a></li>
            <li><a href="http://codepen.io/Volosnikov/"><i className="fa fa-codepen fa-lg"></i></a></li>
            <li><a href="https://github.com/lightofdavinci"><i className="fa fa-github fa-lg"></i></a></li>
            <li><a href="https://vk.com/danymccoyvolosnikov"><i className="fa fa-vk fa-lg"></i></a></li>
          </ul>
        </div>
        <div className="App-footer"></div>
      </div>
    );
  }
}
