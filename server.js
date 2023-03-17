const path = require('path');
const gateway = require('express-gateway');
const user = require('./user');
const product = require('./product');

gateway().load(path.join(__dirname, 'config')).run();
