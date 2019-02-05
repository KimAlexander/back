const express = require('express');
const os = require('os')
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
var cors = require('cors');
const mongoose = require('mongoose');
const router = new express.Router();

const followersRout = require('./routs/followers');

const networkInterfaces = os.networkInterfaces();

function init() {
  console.log('run')
  mongoose.connect(`mongodb://${networkInterfaces.lo[0].address}/insta`, {
    useNewUrlParser: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('-----OK-----');
  });

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());

  const noCache = function (req, res, next) {
    res.setHeader('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.setHeader('Pragma', 'no-cache');
    return next();
  };

  app.use('/api', cors({
    exposedHeaders: 'Content-Range,Content-Length',
    maxAge: 600
  }), noCache, require('./api'));
}

setTimeout(init, 10000)

module.exports = app;
