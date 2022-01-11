const { userDao } = require('../models/');
const bcrypt = require('bcrypt');
const token = require('../utils/token');

const signIn = async (email, password) => {
  const user = await userDao.getUserByEmail(email);

  const isSame = bcrypt.compareSync(password, user.password);

  if (!user) {
    const error = new Error('INVALID_USER');
    error.statusCode = 400;

    throw error;
  }

  if (!isSame) {
    const error = new Error('INVALID_USER');
    error.statusCode = 400;

    throw error;
  }
  const signToken = token.signToken(user.email);
  return signToken;
};

const signUp = async (name, email, password) => {
  const userData = await userDao.getUserByEmail(email);

  if (userData) {
    const error = new Error('EMAIL IS DUPLICATED');
    error.statusCode = 400;

    throw error;
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  return await userDao.createUser(name, email, hashedPassword);
};

const likeAndUnlike = async (user_id, product_id) => {
  return await userDao.likeAndUnlike(user_id, product_id);
};

// const likeAndUnlike = async (user_id, product_id) => {
//   userDao.likeAndUnlike(user_id, product_id);

//   if (likeData) {
//     const error = new Error('ALREADY LIKED BY USER');
//     error.statusCode = 400;

//     throw error;
//   }
//   return await userDao.like(user_id, product_id);
// };

// const unLike = async (user_id, product_id) => {
//   const likeData = await userDao.likeExist(user_id, product_id);

//   if (!likeData) {
//     const error = new Error('ALREADY IS NOT LIKED');
//     error.statusCode = 400;

//     throw error;
//   }

//   return await userDao.unLike(user_id, product_id);
// };

const userNameFind = async (userId) => {
  const decodedUserName = token.verifyToken(userId).id;
  return await userDao.userNameFind(decodedUserName);
};

module.exports = { signIn, signUp, likeAndUnlike, userNameFind };
