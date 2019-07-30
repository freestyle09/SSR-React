import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Nothing found...</h1>
        <Link to='/'>Strona domowa</Link>
      </div>
    );
  }
}

export default NotFound;
