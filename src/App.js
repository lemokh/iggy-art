import React, { Component } from 'react';
import './App.css';
import jumbo from './panda-head.jpg';
import ImageList from './ImageList';

const articles = [
  {
    "title": "I Personify Mother Nature In My Pencil Drawings",
    "src": "https://github.com/lightofdavinci/photo/blob/master/panda1.jpg?raw=true",
    "description": "I love nature and I like to personify it in pencil portraits using mechanical pencil and charcoal"
  },
  {
    "title": "Incredible Origami Animals By Spanish Artist Gonzalo Calvo",
    "src": "https://github.com/lightofdavinci/photo/blob/master/panda2.jpg?raw=true",
    "description": "Madrid-based full time musician Gonzalo Garcia Calvo has amazing origami skills. He explores many themes, but his true passion is animals."
  },
  {
    "title": "This Levitating Storm Cloud Is Actually A Bluetooth Speaker",
    "src": "https://github.com/lightofdavinci/photo/blob/master/panda3.jpg?raw=true",
    "description": "After his interactive cloud lamp that could bring a thunderstorm into your living room, designer Richard Clarkson is back! This time, with a bluetooth speaker disguised as a floating cloud."
  },
  {
    "title": "My Daughter And I Are Ready To Terrorize The Neighborhood This Halloween",
    "src": "https://github.com/lightofdavinci/photo/blob/master/panda4.jpg?raw=true",
    "description": "My daughter, who is 10 years old, and I worked over a long weekend to make these costumes. We used mostly old stuff from around the house but had to buy quite a bit of cushion foam for the beast. "
  },
  {
    "title": "Photographer Captures Soulful Portraits Of Dogs Enjoying Autumn",
    "src": "https://github.com/lightofdavinci/photo/blob/master/panda5.jpg?raw=true",
    "description": "Anne Geier, a photographer from Austria, has a beautiful gift of capturing soulful portraits of dogs. Some of her best work is created in autumn, thanks to the golden colors and a misty weather adding a perfect magical atmosphere, which makes the portrait stand out even more."
  },
  {
    "title": "Georgian Couple Uses Fallen Leaves To Create Out-Of-This-World Art",
    "src": "https://github.com/lightofdavinci/photo/blob/master/panda6.jpg?raw=true",
    "description": "Kristi Botkoveli (Nancy Woland) and Beka Zaridze are two self-taught artists who create art that is magical and mystical."
  },
  {
    "title": "Pokeball Terrariums Are A Thing Now But The Demand Is So Big It’s Hard To ‘Catch’ Them",
    "src": "https://github.com/lightofdavinci/photo/blob/master/panda7.jpg?raw=true",
    "description": "Texas-based artist Lauren creates Pokeball Terrariums, but don't think they're somehow easier to catch than Pokemon you see on your smartphone screen. With over 100 waiting in the queue to order a Poke terrarium, Lauren says the demand is huge and as for now, she simply can't keep up with it."
  },
  {
    "title": "Poland Unveils Glow-In-The-Dark Bicycle Path That Is Charged By The Sun",
    "src": "https://github.com/lightofdavinci/photo/blob/master/panda8.jpg?raw=true",
    "description": "Cycling is one of the most eco-friendly ways to travel, and thanks to this solar-powered bike lane that glows in the dark, it just got even moreso."
  },
  {
    "title": "Rare Salvador Dali’s Surrealist Cookbook Is Being Re-Released For The First Time In Over 40 Years",
    "src": "https://github.com/lightofdavinci/photo/blob/master/panda9.jpg?raw=true",
    "description": "When we think of Salvador Dali, we usually think of melting clocks and surrealist paintings. But the famously flamboyant artist was also something of a culinary connoisseur, and in 1973 he even released his own cookbook called Les Diners de Gala."
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={jumbo} alt="jumbotron" />
        </div>
        <div className="App-main-nav"></div>
        <div className="App-nav"></div>
        <ImageList articles={articles} />
        <div className="App-social-buttons"></div>
        <div className="App-footer"></div>
      </div>
    );
  }
}

export default App;
