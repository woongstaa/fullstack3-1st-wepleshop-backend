const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.categories);
router.get('/sub', categoryController.subCategories);
router.post('/filter', categoryController.filterCategories);

module.exports = router;
