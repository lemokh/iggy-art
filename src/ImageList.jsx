import React, { Component } from 'react';
import Image from './Image.jsx';

export default class ImageList extends Component {
  render() {
    return (<ul className="article__list">{
      this.props.articles.map((article,id) => {
        return <Image key={id} title={article.title} src={article.src} points={article.points} id={id} />;
      })
    }</ul>);
  }
}
