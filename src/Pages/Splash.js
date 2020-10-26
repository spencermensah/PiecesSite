import React, { Component } from 'react';
import './landingStyle.css'
import logo from './delayed2.gif'
import ReactPlayer from "react-player"
import logoText from './LOGO.png'

class Splash extends Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
    };
  }

  componentWillMount() {
    document.body.style.background= 'black';
  }


  render() {
    return (

      <div className="landingBackground">
        <a href="http://piecesjeans.herokuapp.com/#/Home">
          <div id='logo'>
            <img src={logo} alt="loading..." />
          </div>
          <img id='logoText' src={logoText} alt="loading..." />
        </a>
      </div>
    );
  }
}

export default Splash;
// <a href="http://localhost:3000/#/Home"><h1>Enter Site</h1></a>

//
//
