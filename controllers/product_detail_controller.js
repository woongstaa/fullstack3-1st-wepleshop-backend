const { productDetailService } = require('../services');

const productDetail = async (req, res) => {
  try {
    const { productId } = req.query;
    const detail = await productDetailService.productDetail(productId);

    return res.status(200).json(detail);
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: err.message });
  }
};

module.exports = { productDetail };
