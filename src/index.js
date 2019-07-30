import express from 'express';

let app = require('./server').default;

if (module.hot) {
  module.hot.accept('./server', () => {
    console.log('Server reloading...');

    try {
      app = require('./server').default;
    } catch (error) {
      // Do nothing
    }
  });
}

app.get('/dane', (req, res) => {
  res.send('Hello World');
});

express()
  .use((req, res) => app.handle(req, res))
  .listen(process.env.PORT || 3000, () => {
    console.log(`React SSR App is running: http://localhost:${process.env.PORT || 3000}`);
  });
