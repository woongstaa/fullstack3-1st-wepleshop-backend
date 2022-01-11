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
      product_imgs.img_url as imgUrl,
      categories.name as categoryName,
      sub_categories.name as subCategoryName,
      product_details.quantity
    FROM
      products
    JOIN
      product_details ON products.id = product_details.product_id
    JOIN
      categories ON products.category_id = categories.id
    JOIN
      sub_categories ON products.subcategory_id = sub_categories.id
    JOIN
      product_imgs ON products.id = product_imgs.product_id
    WHERE 
      CASE
      WHEN ${categoryId} and ${subCategoryId} THEN products.category_id = ${categoryId} and products.subcategory_id = ${subCategoryId}
      WHEN ${categoryId} and !${subCategoryId} THEN products.category_id = ${categoryId}
      ELSE TRUE
      END
    ${raw(sortOption)}
   `;
  return list;
};

module.exports = { productList };
