const categoryDao = require('../models/category_dao');

const categories = async () => {
  return await categoryDao.getCategories();
};

const subCategories = async () => {
  return await categoryDao.getSubCategories();
};

const filterCategories = async (category_id, sub_category_id) => {
  const [category] = await categoryDao.findCategories(
    category_id,
    sub_category_id
  );

  if (!category) {
    const error = new Error('Not exist category');
    error.statusCode = 400;

    throw error;
  }

  return category;
};

module.exports = { categories, subCategories, filterCategories };
