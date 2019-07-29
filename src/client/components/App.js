import React, { Component } from 'react';
import '../styles/App.css';

import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>

        <Route path='/' strict exact component={Home} />
        <Route path='/contact' exact component={Contact} />
        {/* <Route path='*' exact component={Home} /> */}
      </div>
    );
  }
}

export default App;
