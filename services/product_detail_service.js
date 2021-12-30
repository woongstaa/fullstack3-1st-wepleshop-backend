const { productDetailDao } = require('../models');

const productDetail = async (id) => {
  const detail = await productDetailDao.productDetail(id);

  if (!detail) {
    const error = new Error('DATA NOT FOUND');
    throw error;
  }

  return detail;
};

module.exports = { productDetail };