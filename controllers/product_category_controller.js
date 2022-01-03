const { productCategoryService } = require('../services');

const categories = async (req, res) => {
  try {
    const category = await productCategoryService.categories();

    return res.status(200).json({ message: category });
  } catch (err) {
    return res.status(500).json({ message: "CATEGORY NOT FOUND" });
  }
};

const subCategories = async (req, res) => {
  try {
    const subCategory = await productCategoryService.subCategories();

    return res.status(200).json({ message: subCategory });
  } catch (err) {
    return res.status(500).json({ message: "SUBCATEGORY NOT FOUND"});
  }
};

module.exports = { categories, subCategories };
