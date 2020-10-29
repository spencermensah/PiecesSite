import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"

import Home from "./Pages/Home"
import Splash from "./Pages/Splash"
import About from "./Pages/About"
import Gallery from "./Pages/Gallery"

class App extends Component {
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
      <div className="App">
        <HashRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Gallery" component={Gallery} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
