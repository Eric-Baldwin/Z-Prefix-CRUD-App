const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id([0-9]+)', userController.getUserById);
router.put('/:id([0-9]+)', userController.updateUser);
router.delete('/:id([0-9]+)', userController.deleteUser);

module.exports = router;
