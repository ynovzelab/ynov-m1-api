const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const validators = require("../middlewares/validators");
const {checkAuth,checkIdentity, validation} = require("../middlewares/validators");

router.post('/register', checkAuth, checkIdentity, validation, authController.register);
router.post('/login', authController.login);

module.exports = router;

const myObj = {
  key1: "ghjk",
  key2:"ghjkl"
}

const { key1 } = myObj;

myObj.key1