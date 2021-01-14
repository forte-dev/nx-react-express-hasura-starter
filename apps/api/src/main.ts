import cors from 'cors';
import * as chalk from 'chalk';
import passport from 'passport';
import * as express from 'express';
import * as bodyParser from 'body-parser';

import { Message } from '@forte-dev/api-interfaces';
import userController from './app/controllers/user';

const port = Number(process.env.SERVER_PORT) || 4444;
const hostname = process.env.HOSTNAME || 'localhost';

const app = express();

app.use(cors());
app.set('host', hostname);
app.set('port', port);
app.set('json spaces', 2);
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

const greeting: Message = { message: 'Welcome to api!' };
app.get('/api', (req, res) => {
  res.send(greeting);
});

app.post('/login', userController.postLogin);
app.post('/signup', userController.postSignup);

const server = app.listen(port, () => {
  console.log();
  console.log(`${chalk.green('✓')} Listening at http://${hostname}:${port}/api`);
  console.log(`  Running in ${app.get('env')} mode.`);
  console.log('  Press CTRL-C to stop.\n');
});

server.on('error', console.error);
