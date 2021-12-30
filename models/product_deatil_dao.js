const prisma = require('../prisma');

const productDetail = async (id) => {
  const detail = await prisma.$queryRaw`
    SELECT
      products.id,
      products.name as product_name,
      products.price as produdct_price,
      product_details.quantity as product_quantity,
      product_colors.name as color_name,
      product_colors.hex as color_hex,
      product_sizes.name as size_name,
      product_imgs.img_url
    FROM products
    JOIN product_imgs ON products.id = product_imgs.product_id
    JOIN product_details ON products.id = product_details.product_id
    JOIN product_colors ON product_colors.id = product_details.color_id
    JOIN product_sizes ON product_sizes.id = product_details.size_id
    WHERE products.id = ${id}`;

  return detail;
};

module.exports = { productDetail };
