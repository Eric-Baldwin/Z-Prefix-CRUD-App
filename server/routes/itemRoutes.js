const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.post('/', itemController.createItem);
router.get('/', itemController.getAllItems);
router.get('/:id([0-9]+)', itemController.getItemById);
router.put('/:id([0-9]+)', itemController.updateItem);
router.delete('/:id([0-9]+)', itemController.deleteItem);

module.exports = router;
