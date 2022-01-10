const { productCartDao } = require('../models');

const productCartService = async (productId) => {
  const cart = await productCartDao.productCart(productId);

  if (!detail) {
    const error = new Error('DATA NOT FOUND');
    throw error;
  }

  return detail;
};

module.exports = { productCartService };
