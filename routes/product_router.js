const express = require('express');
const router = express.Router();

const {
  productDetailController,
  productCategoryController,
  productListController,
  slideController,
} = require('../controllers');

router.post('/details', productDetailController.productDetail);
router.post('/cart', productCart.productCart);
router.get('/list', productListController.productList);
router.get('/slide', slideController.slide);

router.get('/category', productCategoryController.categories);
router.get('/sub_category', productCategoryController.subCategories);

module.exports = router;
