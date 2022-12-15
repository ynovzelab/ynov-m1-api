const express = require('express');
const router = express.Router();
const userRouter = require('./user.route');
// const productRouter = reqyire('./product.route');

router.use('/user', userRouter);
// router.use('/product', productRouter);

module.exports = router;