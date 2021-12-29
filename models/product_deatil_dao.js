const prisma = require('../prisma');

const productDetail = async () => {
  //   const detail = await prisma.$queryRaw`
  //     SELECT * FROM products WHERE id = 1`;

  const detail = await prisma.$queryRaw`
    SELECT
      products.id,
      products.name,
      products.price,
      product_details.quantity,
      product_colors.name,
      product_colors.hex,
      product_sizes.name,
      product_imgs.img_url
    FROM products
    JOIN product_imgs ON products.id = product_imgs.product_id
    JOIN product_details ON products.id = product_details.product_id
    JOIN product_colors ON product_colors.id = product_details.color_id
    JOIN product_sizes ON product_sizes.id = product_details.size_id
    WHERE products.id = 1`;

  return detail;
};

module.exports = { productDetail };
