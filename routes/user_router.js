const express = require('express');
const router = express.Router();

const { userController } = require('../controllers');

router.post('/signin', userController.signIn);
router.post('/signup', userController.signUp);
router.post('/like', userController.like);
router.post('/unlike', userController.unLike);
router.post('/usernamefind', userController.userNameFind);

module.exports = router;
