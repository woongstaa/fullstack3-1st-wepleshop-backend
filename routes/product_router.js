const express = require('express');
const router = express.Router();

const {
  productDetailController,
  productSortController,
  productCategoryController,
} = require('../controllers');

router.get('/details', productDetailController.productDetail);

router.get('/sort', productSortController.productSort);

router.get('/category', productCategoryController.categories);
router.get('/sub_category', productCategoryController.subCategories);
router.post('/filter_category', productCategoryController.filterCategories);

module.exports = router;
