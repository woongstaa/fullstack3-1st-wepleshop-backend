const prisma = require('./index');

const productList = async (id) => {
  const list = await prisma.$query`
    SELECT
      id as product_id,
      name as product_name,
      product_imgs,
      price
    FROM
      products
    `;
  return list;
};

module.exports = { productList };
