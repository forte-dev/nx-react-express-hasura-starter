import camelCase from 'just-camel-case';

import { combineReducers } from 'redux';

const reducers = {};

const req = require.context('.', true, /\.\/.+\/reducer\.ts$/);

req.keys().forEach((key) => {
  const storeName = camelCase(key.replace(/\.\/modules\/(.+)\/.+$/, '$1'));
  reducers[storeName] = req(key).default;
});

export default combineReducers(reducers);
