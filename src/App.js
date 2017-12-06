import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';

import CompA from './components/CompA';
import AsyncWrapperA from './components/AsyncWrapperA';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={this.props.history}>
          <div>
            <Link to={'/'}>home</Link>
            <span>&emsp;</span>
            <Link to={'/ca'}>/wa/wb</Link>
            <span>&emsp;</span>
            <Link to={'/wa/wb'}>/wa/wb</Link>

            <Route path={"/ca"} component={CompA}></Route>
            <Route path={"/wa"} component={AsyncWrapperA}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
