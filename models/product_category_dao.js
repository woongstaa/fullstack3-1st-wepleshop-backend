const prisma = require('./index');

const getCategories = async () => {
  const category = await prisma.$queryRaw`
    SELECT
      id,
      name 
    FROM
      categories;
  `;
  return category;
};

const getSubCategories = async () => {
  const category = await prisma.$queryRaw`
    SELECT
      categories.id As categoryId,
      categories.name As category,
      sub_categories.id As subCategoryId,
      sub_categories.name AS subCategory
    FROM
      categories
    JOIN
      sub_categories
    ON
      categories.id = sub_categories.category_id
    `;
  return category;
};

module.exports = { getCategories, getSubCategories };
