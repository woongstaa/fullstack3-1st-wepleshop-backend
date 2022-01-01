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

  const signToken = token.signToken(email);
  return signToken;
};

const signUp = async (name, email, password) => {
  const userData = await userDao.getUserByEmail(email);

  if (userData) {
    const error = new Error('EMAIL IS DUPLICATED');
    error.statusCode = 400;

    throw error;
  } else {
    const hashedPassword = bcrypt.hashSync(password, 10);
    return userDao.createUser(name, email, hashedPassword);
  }
};
module.exports = { signIn, signUp };
