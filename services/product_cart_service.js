const { productCartDao } = require('../models');
const token = require('../utils/token');

const productCart = async (userId, productId, color, size, quantity) => {
  
  const decodedUserEmail = token.verifyToken(userId).id;
  console.log("decodedUserEmail", decodedUserEmail);
  const emailToUserId = await productCartDao.getUserIdByEmail(decodedUserEmail);
  const decodedUserId = emailToUserId["id"];
  const cart = await productCartDao.productCart(decodedUserId, productId, color, size, quantity);

  if (!cart) {
    const error = new Error('CART NOT FOUND');
    error.statusCode = 400;
    throw error;
  }
  return cart;
};

module.exports = { productCart };