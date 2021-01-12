#!/usr/bin/env node

const fs = require('fs');

try {
  if (fs.existsSync('./hasura/.env')) {
    console.log('The ./hasura/.env file already exists, skipping make-hasura-env process.');
  } else {
    console.log('The ./hasura/.env file does not exist, using .env-hasura-template as the baseline.');
    fs.copyFileSync('./hasura/.env-hasura-template', './hasura/.env');
  }
} catch (err) {
  console.log('Something went wrong during make-hasura-env process.');
  console.error(err.message);
}
