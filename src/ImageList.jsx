import React, { Component } from 'react';
import Image from './Image.jsx';

export default class ImageList extends Component {
  renderArticle(article, index) {
    return (
      <Image
        key={index}
        title={article.title}
        src={article.src}
        points={article.points}
        id={index}
        pid={article.pid}
        tl={article.likeClass}
      />
    );
  }

  render() {
    const articles = Object.values(this.props.articles);
    const arrIds = Object.keys(this.props.articles);
    const likesArr = this.props.likes;
    for(let i = 0, len = arrIds.length; i < len; i++){
      articles[i].pid = arrIds[i];
      articles[i].likeClass = likesArr[i];
    }
    articles.reverse();
    return (
      <ul className="article__list">
        {articles.map(this.renderArticle)}
      </ul>
    );
  };
}
