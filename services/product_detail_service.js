const { product_detail_dao } = require('../models');

const productDetail = async () => {
  const detail = product_detail_dao.productDetail();

  if (!detail) {
    const error = new Error('Please show me anything!');
    throw error;
  }

  return detail;
};

module.exports = { productDetail };
