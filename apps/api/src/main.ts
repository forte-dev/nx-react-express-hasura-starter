import * as express from 'express';

import { Message } from '@forte-dev/api-interfaces';

const app = express();

const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

const port = Number(process.env.SERVER_PORT) || 4444;
const hostname = process.env.HOSTNAME || 'localhost';

const server = app.listen(port, () => {
  console.log(`Listening at http://${hostname}:${port}/api`);
});

server.on('error', console.error);
