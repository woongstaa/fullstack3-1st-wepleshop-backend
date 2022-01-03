const bcrypt = require('bcrypt');
const { userDao } = require('../models/');

function compare(reqPassword, dbPassword) {
  const isSame = bcrypt.compareSync(reqPassword, dbPassword);
  return isSame;
}

const signIn = async (email, password) => {
  const user = await userDao.getUserByEmail(email);
  console.log('user in service: ', user);

  if (!user) {
    const error = new Error('INVALID_USER');
    error.statusCode = 400;

    throw error;
  }

  if (!compare(password, user.password)) {
    const error = new Error('INVALID_USER');
    error.statusCode = 400;

    throw error;
  }
  return user;
};

const signUp = async (name, email, password) => {
  const userData = await userDao.getUserByEmail(email);

  if (userData) {
    const error = new Error('EMAIL ALREADY EXISTS');
    error.statusCode = 400;

    throw error;
  } else {
    return userDao.createUser(name, email, password);
  }
};

module.exports = { signIn, signUp };
