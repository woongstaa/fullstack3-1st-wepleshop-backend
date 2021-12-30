const { product_detail_service } = require('../services');

const productDetail = async (req, res) => {
  try {
    const detail = await product_detail_service.productDetail();

    return res.status(200).json(detail);
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: err.message });
  }
};

module.exports = { productDetail };
