const express = require('express');
const router = express.Router();
const productRouter = require('./product_router');

// router.use('/products/detail', productRouter);
router.use('/products', productRouter)
module.exports = router;
