import * as express from 'express';
import * as path from 'path';
import {events} from './data/original-test';
// import {events} from './data/modified-test';
// import {events} from './data/large-test';
const app = express();


app.get('/api/events', (req, res) => {
  /**
   * An example of handling query parameters and bad requests:
   */
  // const { filterString } = req.query;

  // if (!filterString) {
  //   res.statusMessage = `Must provide a filterString query parameter.`;
  //   res.sendStatus(HttpStatus.BAD_REQUEST);
  //   return;
  // }
  res.json({
    data: events
  });
});

/**
 * These endpoints are used for deploying the Heroku app, which serves
 * both the server and client. Testing the client locally should be done
 * with the CRA server, which proxies requests to this server for /api, but serves
 * the content separately for HMR.
 */
app.use('/static', express.static(path.join(`${__dirname}/build/static`)));
app.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/build/index.html`));
});

export default app;
