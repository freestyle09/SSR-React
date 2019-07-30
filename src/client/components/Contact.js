import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Contact extends Component {
  state = {
    name: 'Stasek'
  };
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
        <img src='Screenshot_2.png' alt='Zdjęcia' />
        <div>Józek dostołeś A1</div>
        <button onClick={this.sendEmail}>Send</button>
      </div>
    );
  }

  sendEmail = () => {
    fetch('/siema', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: 'Józef'
    })
      .then(resp => resp.json())
      .then(data => console.log(data));
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(resp => resp.json())
      .then(data => console.log(data));
  }
}

export default Contact;
