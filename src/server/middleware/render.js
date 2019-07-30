import escapeStringRegexp from 'escape-string-regexp';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import App from '../../client/components/App';

const renderMiddleware = () => (req, res) => {
  let html = req.html;
  const routerContext = {};
  const htmlContent = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={routerContext}>
      <App />
    </StaticRouter>
  );
  const helmet = Helmet.renderStatic();
  const htmlReplacements = {
    HTML_CONTENT: htmlContent,
    HELMET_HTML_ATTRIBUTES: helmet.htmlAttributes.toString(),
    HELMET_META_ATTRIBUTES: `
       ${helmet.title.toString()}
       ${helmet.meta.toString()}
       ${helmet.link.toString()}
     `,
    HELMET_BODY_ATTRIBUTES: helmet.bodyAttributes.toString()
  };

  Object.keys(htmlReplacements).forEach(key => {
    const value = htmlReplacements[key];
    html = html.replace(new RegExp('__' + escapeStringRegexp(key) + '__', 'g'), value);
  });

  if (routerContext.url) {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', 0);
    res.redirect(302, routerContext.url);
  } else {
    res.send(html);
  }
};

export default renderMiddleware;
