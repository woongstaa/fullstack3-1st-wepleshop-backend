const express = require('express');
const router = express.Router();

const {
  productDetailController,
  productSortController,
} = require('../controllers');

router.get('/details', productDetailController.productDetail);

router.get('/sort', productSortController.productSort);

module.exports = router;
