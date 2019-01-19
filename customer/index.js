const express = require('express');
const controller = require('./customer.controller');
const router = new express.Router();

router.get('/', controller.index);
router.post('/user', controller.create);
router.get('/:userId', controller.getById);
router.patch('/:userId', controller.updateById);

module.exports = router;