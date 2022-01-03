const prisma = require('./index');
const PrismaClient = require('@prisma/client');
const { raw } = PrismaClient.Prisma;

const productList = async (categoryId, subCategoryId, sortOption) => {
  const list = await prisma.$queryRaw`
    SELECT
      products.id as productId,
      products.name as productName,
      products.price,
      products.like_count as likeCount,
      product_imgs.img_url as imgUrl 
    FROM 
      products
    JOIN 
      product_imgs ON products.id = product_imgs.product_id
    WHERE 
      if (${subCategoryId}, 
          products.category_id = ${categoryId} and products.subcategory_id = ${subCategoryId} , 
          products.category_id = ${categoryId})
    ${raw(sortOption)}`;
  return list;
};

module.exports = { productList };