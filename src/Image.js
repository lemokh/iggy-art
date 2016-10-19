import React, { Component } from 'react';
import { Link } from 'react-router';
import './Image.css';

export default class Image extends Component {
  render() {
    return (<li>
              <div className="thumbnail">
                <Link to={`/post/${this.props.id}`}>
                  <img className="article__pic" src={this.props.src} alt='width:500px' />
                  <p className="article__title">{this.props.title}</p>
                </Link>
              </div>
            </li>);
  }
}

Image.propTypes = {
  src: React.PropTypes.string,
  title: React.PropTypes.string,
  id: React.PropTypes.number
};
