import React, { Component } from 'react';
import './landingStyle.css'
import logo from './PIECES.png'
import ReactPlayer from "react-player"

class Splash extends Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
    };
  }

  componentWillMount() {

  }


  render() {
    return (

      <div>
        <a href="http://localhost:3000/#/Home">
          <div id='logo'>
            <ReactPlayer
              url='video/piecesLoop.mp4'
              muted={true}
              playing={true}
              width='100%'
              height='70%'
            />
          </div>
        </a>
      </div>
    );
  }
}

export default Splash;
// <a href="http://localhost:3000/#/Home"><h1>Enter Site</h1></a>

//
//
