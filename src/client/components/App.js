import React, { Component } from 'react';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import NotFound from './404';

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
        <Switch>
          <Route path='/' strict exact component={Home} />
          <Route path='/contact' strict exact component={Contact} />
          <Route path='/404' strict exact component={NotFound} />

          {/* <Redirect to='/404' /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
