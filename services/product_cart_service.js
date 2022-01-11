const { productCartDao } = require('../models');
const { productCartAddDuplicate } = require('../models/product_cart_dao');
const token = require('../utils/token');

const productCartAdd = async (userId, productId, color, size, quantity) => {
  const decodedUserEmail = token.verifyToken(userId).id;
  const emailToUserId = await productCartDao.getUserIdByEmail(decodedUserEmail);
  const decodedUserId = emailToUserId['id'];
  
  const duplicate = await productCartDao.productDuplicate(
    decodedUserId,
    productId,
    color,
    size
  );
  console.log('service after');
  console.log(duplicate);
  if (duplicate) {
    return productCartDao.productCartAddDuplicate(
      decodedUserId,
      productId,
      color,
      size,
      quantity
    );
  }
  return productCartDao.productCartAdd(
    decodedUserId,
    productId,
    color,
    size,
    quantity
  );
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
      size,
      quantity
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

module.exports = {
  productCartAdd,
  productCartAddDuplicate,
  productCartDelete,
  productCartEdit,
};
