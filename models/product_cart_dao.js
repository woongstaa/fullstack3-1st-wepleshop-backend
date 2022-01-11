const prisma = require('./index');

const productCart = async (productId, color, size, quantity) => {
  const [duplicate] = await prisma.$queryRaw`
    SELECT 
        product_id,
        product_color_english_name,
        product_size_name
    FROM 
      product_carts 
    WHERE 
      product_id=${productId} 
    AND
      product_color_english_name=${color} 
    AND
      product_size_name=${size}
  `;

  if (duplicate) {
    await prisma.$queryRaw`
    UPDATE 
      product_carts 
    SET 
      quantity=quantity+${quantity}
    WHERE 
      product_id=${productId} 
    AND
      product_color_english_name=${color} 
    AND
       product_size_name=${size}
    `;

    return '중복된 제품의 수량이 장바구니에 추가되었습니다.';
  } else {
    await prisma.$queryRaw`
    INSERT INTO
      product_carts (product_id, product_color_english_name, product_size_name, quantity)
    VALUES
      (${productId}, ${color}, ${size}, ${quantity})

    `;

    return '제품이 장바구니에 추가되었습니다.';
  }
};

module.exports = { productCart };
