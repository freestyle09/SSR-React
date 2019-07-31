import express from 'express';
import path from 'path';
import htmlMiddleware from './middleware/html';
import renderMiddleware from './middleware/render';

const publicPath = path.join(__dirname, '/public');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static(publicPath));
app.use(htmlMiddleware());
app.use(renderMiddleware());

export default app;
