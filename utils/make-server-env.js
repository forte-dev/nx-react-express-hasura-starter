#!/usr/bin/env node

const fs = require('fs');

try {
  if (fs.existsSync('.env')) {
    console.log(
      'The .env file already exists, skipping make-server-env process.'
    );
  } else {
    console.log(
      'The .env file does not exist, using .env-template as the baseline.'
    );
    fs.copyFileSync('.env-template', '.env');
  }
} catch (err) {
  console.log('Something went wrong during make-server-env process.');
  console.error(err.message);
}
