const prisma = require('./index');

const productList = async (id) => {
  const list = await prisma.$queryRaw`
    SELECT
      products.id as product_id,
      products.name as product_name,
      products.price,
      product_imgs.img_url
    FROM
      products
    JOIN
      product_imgs ON products.id = product_imgs.product_id
    WHERE products.id = ${id};
    `;
  return list;
};

module.exports = { productList };
