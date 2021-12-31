const express = require('express');
const router = express.Router(); // express 라우팅 기능을 사용하기 위해서 router 객체가 필요합니다
const tempController = require('../controllers/index');
const { productListDao } = require('../controllers/product_list_controller');

router.get('/list', productListDao);

module.exports = router; // 이렇게 내보낸 router 는 express app 의 미들웨어로 사용됩니다.
