import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"

import Home from "./Pages/Home"
import Splash from "./Pages/Splash"

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
            <Route exact path="/" component={Splash} />
            <Route exact path="/Home" component={Home} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
