import React, { Component } from 'react';
import Image from './Image.jsx';

export default class ImageList extends Component {
  render() {
    const artArray = [];
    for (let key in this.props.articles) {
      if (this.props.articles.hasOwnProperty(key)) {
        artArray.unshift(this.props.articles[key]);
      }
    }
    return (<ul className="article__list">{
      artArray.map((article,id) => {
        return <Image key={id} title={article.title} src={article.src} points={article.points} id={id} />;
      })
    }</ul>);
  }
}
