const { productCartDao } = require('../models');
const token = require('../utils/token');

const productCartAdd = async (
  userId,
  productId,
  color,
  quantity,
  size,
  name,
  price,
  image
) => {
  const decodedUserEmail = token.verifyToken(userId).id;
  const emailToUserId = await productCartDao.getUserIdByEmail(decodedUserEmail);
  const decodedUserId = emailToUserId['id'];
  const duplicate = await productCartDao.productDuplicate(
    decodedUserId,
    productId,
    color,
    size
  );
  if (duplicate) {
    return productCartDao.productCartAddDuplicate(
      decodedUserId,
      productId,
      color,
      quantity,
      size
    );
  } else {
    return productCartDao.productCartAdd(
      decodedUserId,
      productId,
      color,
      quantity,
      size,
      name,
      price,
      image
    );
  }
};

const productCartEdit = async (userId, productId, color, size, quantity) => {
  const decodedUserEmail = token.verifyToken(userId).id;
  const emailToUserId = await productCartDao.getUserIdByEmail(decodedUserEmail);
  const decodedUserId = emailToUserId['id'];
  const duplicate = await productCartDao.productDuplicate(
    decodedUserId,
    productId,
    color,
    size
  );

  if (duplicate) {
    const cart = await productCartDao.productCartEdit(
      decodedUserId,
      productId,
      color,
      quantity,
      size
    );
    return cart;
  } else return '수정할 제품이 장바구니에 존재하지 않습니다.';
};

const productCartDelete = async (userId, productId, color, size) => {
  const decodedUserEmail = token.verifyToken(userId).id;
  const emailToUserId = await productCartDao.getUserIdByEmail(decodedUserEmail);
  const decodedUserId = emailToUserId['id'];
  const duplicate = await productCartDao.productDuplicate(
    decodedUserId,
    productId,
    color,
    size
  );

  if (duplicate) {
    const cart = await productCartDao.productCartDelete(
      decodedUserId,
      productId,
      color,
      size
    );
    return cart;
  } else return '수정할 제품이 장바구니에 존재하지 않습니다.';
};

const productCartGet = async (userId) => {
  const decodedUserEmail = token.verifyToken(userId).id;
  const emailToUserId = await productCartDao.getUserIdByEmail(decodedUserEmail);
  const decodedUserId = emailToUserId['id'];

  const cart = await productCartDao.productCartGet(decodedUserId);

  if (!cart) {
    const error = new Error('CART NOT FOUND');
    error.statusCode = 400;
    throw error;
  }

  return cart;
};

module.exports = {
  productCartAdd,
  productCartDelete,
  productCartEdit,
  productCartGet,
};
