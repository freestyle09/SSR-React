import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Strona główna</title>
        </Helmet>
        <h1>Home works</h1>
      </div>
    );
  }
}

export default Home;
