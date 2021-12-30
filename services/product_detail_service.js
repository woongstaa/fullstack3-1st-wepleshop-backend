const res = require('express/lib/response');
const { product_detail_dao } = require('../models');

const productDetail = async (id) => {
  const detail = await product_detail_dao.productDetail(id);

  if (!detail) {
    const error = new Error('DATA NOT FOUND');
    throw error;
  }

  return detail;
};

module.exports = { productDetail };
