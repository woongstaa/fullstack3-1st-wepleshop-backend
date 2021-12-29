const express = require('express');
const router = express.Router();

const { product_detail_controller } = require('../controllers');

router.get('/detail', product_detail_controller.productDetail);

module.exports = router;
