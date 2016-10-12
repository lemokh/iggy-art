import React, { Component } from 'react';
import Image from './Image';

class ImageList extends Component {

  render() {
    return (<ul>{
      this.props.articles.map((article,id) => {
        return <Image key={id} title={article.title} src={article.src} />;
      })
    }</ul>);
  }

}

export default ImageList;
