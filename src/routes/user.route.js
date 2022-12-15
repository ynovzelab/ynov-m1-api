const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getUsers);
router.get('/:id', userController.getOneUser);
router.post('/', userController.register);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteOneUser)

module.exports = router;