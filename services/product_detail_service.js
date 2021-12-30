const { productDetailDao } = require('../models');

const productDetail = async (id) => {
  const detail = await productDetailDao.productDetail(id);

  if (!detail) {
    const error = new Error('DATA NOT FOUND');
    throw error;
  }

  return detail;
};

<<<<<<< HEAD
module.exports = { productDetail };
=======
module.exports = { productDetail };
>>>>>>> d3b43957478d8fb3ad70cb98e2f6b081fbe6e4a1
