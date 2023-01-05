const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/veryfyToken');

router.get('/users', userController.getUsers);
router.get('/:id', verifyToken, userController.getOneUser);
router.post('/', userController.register);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteOneUser)

module.exports = router;