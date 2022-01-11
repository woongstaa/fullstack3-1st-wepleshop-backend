const express = require('express');
const router = express.Router();

const {
  productDetailController,
  productCategoryController,
  productListController,
  slideController,
  productCartController,
  flowController,
} = require('../controllers');

router.post('/details', productDetailController.productDetail);
router.post('/cartadd', productCartController.productCartAdd);
router.delete('/cartdelete', productCartController.productCartDelete);
router.post('/cartedit', productCartController.productCartEdit);
router.get('/cartget', productCartController.productCartGet);
router.get('/list', productListController.productList);
router.get('/slide', slideController.slide);

router.get('/category', productCategoryController.categories);
router.get('/sub_category', productCategoryController.subCategories);

module.exports = router;
