const productListDao = require('../models');

const productList = async (id) => {
  const list = await productListDao.productList(id);
};
