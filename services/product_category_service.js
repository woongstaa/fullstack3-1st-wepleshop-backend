const { productCategoryDao } = require('../models');

const categories = async () => {
  return await productCategoryDao.getCategories();
};

const subCategories = async () => {
  return await productCategoryDao.getSubCategories();
};

module.exports = { categories, subCategories };
