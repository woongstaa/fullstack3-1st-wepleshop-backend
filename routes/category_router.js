const express = require('express');
const router = express.Router();

const { productCategoryController } = require('../controllers');

router.get('/', productCategoryController.categories);
router.get('/sub', productCategoryController.subCategories);

module.exports = router;
