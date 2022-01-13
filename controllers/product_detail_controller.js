const { productListService } = require('../services');

const productList = async (req, res) => {
  try {
    const { categoryId, subCategoryId, sortWord } = req.query;

    const list = await productListService.productList(
      categoryId,
      subCategoryId,
      sortWord
    );
    return res.status(200).json({ message: 'ProductList', list });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'ProductList Load Fail' });
  }
};

module.exports = { productList };
