const prisma = require('./index');

const [duplicate] = await prisma.$queryRaw`
  SELECT 
      product_id,
      product_color_english_name,
      product_size_name,
      quantity
  FROM 
    product_carts 
  WHERE 
    product_id=${productId} 
  AND
    product_color_english_name=${color} 
  AND
    product_size_name=${size}
`;

const productCartAdd = async (productId, color, size, quantity) => {
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
const productCartDelete = async (productId, color, size, quantity) => {
  if (duplicate) {
    await prisma.$queryRaw`
    DELETE FROM 
      product_carts
    WHERE
      product_id=${productId} 
    AND
      product_color_english_name=${color} 
    AND
       product_size_name=${size}
    `;

    return '제품이 장바구니에서 삭제되었습니다.';
  } else {
    return '제품이 존재하지 않습니다.';
  }
};
const productCartEdit = async (productId, color, size, quantity) => {
  if (duplicate) {
    await prisma.$queryRaw`
    UPDATE 
      product_carts 
    SET 
      quantity=${quantity}
    WHERE 
      product_id=${productId} 
    AND
      product_color_english_name=${color} 
    AND
       product_size_name=${size}
    `;

    return '장바구니 내 제품의 수량이 변경되었습니다.';
  } else {
    return '장바구니 내 제품이 존재하지 않습니다.';
  }
};

module.exports = { productCartAdd, productCartDelete, productCartEdit };
