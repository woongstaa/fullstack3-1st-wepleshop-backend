const express = require('express');
const router = express.Router();

const {
  productDetailController,
  productSortController,
  productListController,
} = require('../controllers');

router.get('/details', productDetailController.productDetail);
router.get('/list', productListController.productList);
router.get('/sort', productSortController.productSort);

module.exports = router;
