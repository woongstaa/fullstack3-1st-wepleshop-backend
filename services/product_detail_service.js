const { productDetailDao } = require('../models');

const productDetail = async (productId) => {
  const detail = await productDetailDao.productDetail(productId);

  if (!detail) {
    const error = new Error('DATA NOT FOUND');
    throw error;
  }

  return detail;
};

module.exports = { productDetail };
