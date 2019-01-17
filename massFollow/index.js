const express = require('express');
const controller = require('./massFollow.controller');
const router = new express.Router();

router.get('/', controller.activeProcess);
router.post('/', controller.createWork);
router.get('/:massFollowId', controller.getProcessById);
router.patch('/:massFollowId', controller.updateProcessById);

module.exports = router;