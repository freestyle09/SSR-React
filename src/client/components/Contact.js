import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Kontakt ze strony</title>
        </Helmet>
        <h1>Contact works</h1>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex neque perferendis autem ducimus tempore aliquid
          cum repellat velit excepturi commodi nisi placeat officia fugit, ipsum quas. Praesentium quia totam nostrum.
        </div>
        <h2>siema</h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic minus tempora deleniti nesciunt adipisci magni
          necessitatibus numquam est vero dolorem. Officiis totam tenetur, rerum vel voluptate aut quisquam illum sit.
        </div>
        <img src='Screenshot_2.png' alt='Zdjęcia' />
      </div>
    );
  }
}

export default Contact;
