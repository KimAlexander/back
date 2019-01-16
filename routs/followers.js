const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'ok get'
  });
});

router.post('/', (req, res, next) => {
  const followers = {
    data: req.body.name
  }

  res.status(200).json({
    message: 'ok post',
    followers
  });
});

module.exports = router;