const { productCartDao } = require('../models');

const productCartAdd = async (productId, color, size, quantity) => {
  const cart = await productCartDao.productCartAdd(
    productId,
    color,
    size,
    quantity
  );

  return cart;
};

const productCartEdit = async (productId, color, size, quantity) => {
  const cart = await productCartDao.productCartEdit(
    productId,
    color,
    size,
    quantity
  );

  return cart;
};

const productCartDelete = async (productId, color, size, quantity) => {
  const cart = await productCartDao.productCartDelete(
    productId,
    color,
    size,
    quantity
  );
  return cart;
};

module.exports = { productCartAdd, productCartDelete, productCartEdit };
