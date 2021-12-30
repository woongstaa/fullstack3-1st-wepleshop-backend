const express = require('express');
const router = express.Router();

const { productDetailController } = require('../controllers');

router.get('', productDetailController.productDetail);

module.exports = router;