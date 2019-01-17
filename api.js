const express = require('express');
const router = new express.Router();

router.use('/users', require('./user'));
router.use('/followers', require('./follower'));
router.use('/massfollow', require('./massFollow'));

module.exports = router;
