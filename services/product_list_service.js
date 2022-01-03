const { productListDao } = require('../models');

const productList = async (id) => {
  const list = await productListDao.productList(id);

  if (!list) {
    const error = new Error('LIST NOT FOUND');
    error.statusCode = 400;
    throw error;
  }
  return list;
};

module.exports = { productList };
