const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
var cors = require('cors');
const mongoose = require('mongoose');
const router = new express.Router();

const followersRout = require('./routs/followers');

mongoose.connect('mongodb://localhost/insta', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('-----OK-----')
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
// app.use((reg, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Header', '*');

//   if (reg.method === 'OPTIONS') {
//     reg.header('Access-Control-Allow-Methods', '*');
//     return reg.status(200).json({});
//   }
// });

// app.use('/followers', followersRout);


app.use('/api', cors({
  exposedHeaders: 'Content-Range,Content-Length',
  maxAge: 600
}), noCache, require('./api'));


module.exports = app;