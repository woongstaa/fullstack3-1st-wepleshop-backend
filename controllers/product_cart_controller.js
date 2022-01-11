const { productCartService } = require('../services');

const productCart = async (req, res) => {
  try {
    const { productId, color, size, quantity } = req.body;
    const cart = await productCartService.productCartService(
      productId,
      color,
      size,
      quantity
    );

    return res.status(200).json(cart);
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: err.message });
  }
};

module.exports = { productCart };
