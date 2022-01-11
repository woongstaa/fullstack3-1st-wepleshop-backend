const prisma = require('./index');

const productCart = async (userId, productId, color, size, quantity) => {
  const [duplicate] = await prisma.$queryRaw`
    SELECT 
        * 
      FROM 
        carts 
      WHERE 
        user_id=${userId}
      AND
        product_id=${productId} 
      AND
        color=${color} 
      AND
        size=${size}
      AND
        user_id=${userId}
  `;

  if (duplicate) {
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
      size=${size}
    `;

    return '중복된 제품의 수량이 장바구니에 추가되었습니다.';
  } else {
    await prisma.$queryRaw`
    INSERT INTO
     carts (user_id,product_id, color, quantity, size)
    VALUES
      (${userId}, ${productId}, ${color}, ${quantity}, ${size})
    `;

    return '제품이 장바구니에 추가되었습니다.';
  }
};

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

module.exports = { productCart, getUserIdByEmail };
