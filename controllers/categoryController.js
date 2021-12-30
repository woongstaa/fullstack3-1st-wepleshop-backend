const categoryService = require('../services/categoryService');

const categories = async (req, res) => {
  try {
    const categories = await categoryService.categories();

    return res.status(200).json({ message: categories });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const subCategories = async (req, res) => {
  try {
    const categories = await categoryService.subCategories();

    return res.status(200).json({ message: categories });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const filterCategories = async (req, res) => {
  try {
    const { category_id, sub_category_id } = req.body;

    const category = await categoryService.filterCategories(
      category_id,
      sub_category_id
    );

    return res.status(200).json({ category });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { categories, subCategories, filterCategories };
