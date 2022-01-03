const express = require('express');
const router = express.Router();

const { userController } = require('../controllers');

router.post('/signin', userController.signIn);
router.post('/signup', userController.signUp);
router.post('/like', userController.like);
router.delete('/unlike', userController.unLike);
module.exports = router;
