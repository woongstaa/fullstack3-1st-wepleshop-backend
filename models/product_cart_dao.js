const prisma = require('./index');

const productDuplicate = async (userId, productId, color, size) => {
  const [duplicate] = await prisma.$queryRaw`
  SELECT 
    carts.user_id,
    carts.product_id,
    carts.color,
    carts.quantity,
    carts.size
  FROM 
    carts 
  WHERE 
    carts.user_id=${userId}
  AND
    carts.product_id=${productId} 
  AND
    carts.color=${color} 
  AND
    carts.size=${size}
  `;
  return duplicate;
};

const productCartAdd = async (userId, productId, color, quantity, size) => {
  await prisma.$queryRaw`
  INSERT INTO
    carts (user_id,product_id, color, quantity, size)
  VALUES
    (${userId}, ${productId}, ${color}, ${quantity}, ${size})
  `;
  return '제품이 장바구니에 추가되었습니다.';
};

const productCartAddDuplicate = async (
  userId,
  productId,
  color,
  quantity,
  size
) => {
  await prisma.$queryRaw`
    UPDATE 
     carts 
    SET 
      quantity=quantity+${quantity}
    WHERE 
      user_id=${userId}
    AND
      product_id=${productId} 
    AND
      color=${color} 
    AND
      size=${size};
    `;

  return '중복된 제품의 수량이 장바구니에 추가되었습니다.';
};

const productCartDelete = async (userId, productId, color, size) => {
  await prisma.$queryRaw`
    DELETE FROM 
      carts
    WHERE
      user_id=${userId}
    AND
      product_id=${productId} 
    AND 
      color=${color} 
    AND
       size=${size};
    `;

  return '제품이 장바구니에서 삭제되었습니다.';
};

const productCartEdit = async (userId, productId, color, quantity, size) => {
  await prisma.$queryRaw`
    UPDATE 
      carts 
    SET 
      quantity=${quantity}
    WHERE 
      user_id=${userId}
    AND  
      product_id=${productId} 
    AND
      color=${color} 
    AND
       size=${size};
    `;

  return '장바구니 내 제품의 수량이 변경되었습니다.';
};

const productCartGet = async (userId) => {
  const cart = await prisma.$queryRaw`
  SELECT 
    carts.user_id,
    carts.product_id,
    carts.color,
    carts.quantity,
    carts.size
  FROM 
    carts
  WHERE
    carts.user_id = ${userId}
  `;
  return cart;
}

const getUserIdByEmail = async (email) => {
  const [userId] = await prisma.$queryRaw`
    SELECT 
      id 
    FROM 
      users 
    WHERE 
      email = ${email};
    `;
  return userId;
};

module.exports = {
  productDuplicate,
  getUserIdByEmail,
  productCartAdd,
  productCartAddDuplicate,
  productCartDelete,
  productCartEdit,
  productCartGet,
};
