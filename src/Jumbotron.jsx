import React from 'react';
import { Parallax } from 'react-parallax';
import './css/Jumbotron.css';
import jumbo from './img/head.jpg';

export default () => (
  <Parallax bgImage={jumbo} strength={300}>
    <h1 className="parallax-title">To a set of fantasy</h1>
  </Parallax>
);
