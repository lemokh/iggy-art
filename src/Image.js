import React, { Component } from 'react';
import './Image.css';

class Image extends Component {
  render() {
    return (<li>
              <div className="thumbnail">
                <img className="article__pic" src={this.props.src} alt='width:500px' />
                <p className="article__title">{this.props.title}</p>
              </div>
            </li>);
  }
}

Image.propTypes = {
  src: React.PropTypes.string,
  title: React.PropTypes.string
};

export default Image;
