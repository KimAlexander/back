const express = require('express');
const controller = require('./follower.controller');
const router = new express.Router();

router.get('/', controller.index);
router.post('/follower', controller.create);
router.get('/:followerId', controller.getById);
router.patch('/:followerId', controller.updateById);

module.exports = router;