const express = require('express');
const router = express.Router();

const {
  productDetailController,
  productCategoryController,
  productListController,
} = require('../controllers');

router.get('/details', productDetailController.productDetail);

router.get('/list', productListController.productList);

router.get('/category', productCategoryController.categories);
router.get('/sub_category', productCategoryController.subCategories);

module.exports = router;
