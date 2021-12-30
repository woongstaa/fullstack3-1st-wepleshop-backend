const { productDetailService } = require('../services');

const productDetail = async (req, res) => {
  try {
    const { id } = req.body;

    const detail = await productDetailService.productDetail(id);

    return res.status(200).json(detail);
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: err.message });
  }
};

module.exports = { productDetail };