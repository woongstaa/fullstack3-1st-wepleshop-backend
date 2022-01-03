const express = require('express');
const router = express.Router();

const productRouter = require('./product_router');
const userRouter = require('./user_router');
const categoryRouter = require('./category_router');

router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/category', categoryRouter);

module.exports = router;
