const { productCartService } = require('../services');

const productCart = async (req, res) => {
  try {
    const { productId, color, size, quantity } = req.query;
    const cart = await productCartService.productDetail(
      productId,
      color,
      size,
      quantity
    );

    return res.status(200).json(detail);
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: err.message });
  }
};

module.exports = { productCart };
