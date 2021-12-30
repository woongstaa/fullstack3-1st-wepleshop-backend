const express = require('express');
const router = express.Router();
const productRouter = require('./product_router');

router.use('/products/detail', productRouter);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> d3b43957478d8fb3ad70cb98e2f6b081fbe6e4a1
