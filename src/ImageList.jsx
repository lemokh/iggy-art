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
      />
    );
  }

  render() {
    const articles = Object.values(this.props.articles);
    articles.reverse();
    return (
      <ul className="article__list">
        {articles.map(this.renderArticle)}
      </ul>
    );
  }
}
