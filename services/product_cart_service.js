const { productCartDao } = require('../models');

const productCartService = async (productId, color, size, quantity) => {
  const cart = await productCartDao.productCart(
    productId,
    color,
    size,
    quantity
  );

  return cart;
};

module.exports = { productCartService };
