const express = require('express');
const router = new express.Router();

router.use('/users', require('./user'));
router.use('/followers', require('./follower'));

module.exports = router;