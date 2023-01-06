const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');
const verifyAdmin = require('../middlewares/verifyAdmin');

router.get('/users', verifyToken, verifyAdmin, userController.getUsers);
router.get('/', verifyToken, userController.getOneUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteOneUser)

module.exports = router;