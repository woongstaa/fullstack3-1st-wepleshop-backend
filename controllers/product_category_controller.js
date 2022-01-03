const { productCategoryService } = require('../services');

const categories = async (req, res) => {
  try {
    const categories = await productCategoryService.categories();

    return res.status(200).json({ message: categories });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const subCategories = async (req, res) => {
  try {
    const categories = await productCategoryService.subCategories();

    return res.status(200).json({ message: categories });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { categories, subCategories };
