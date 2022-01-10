const express = require('express');
const router = express.Router();

const { userController } = require('../controllers');

router.post('/signin', userController.signIn);
router.post('/signup', userController.signUp);
router.post('/like', userController.likeAndUnlike);
// router.delete('/unlike', userController.unLike);
module.exports = router;
