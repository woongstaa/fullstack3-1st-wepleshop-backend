const { productCartService } = require('../services');

const productCart = async (req, res) => {
  try {
    const { userId, productId, color, size, quantity } = req.body;
    const cart = await productCartService.productCart(
      userId,
      productId,
      color,
      size,
      quantity
    );
    
    return res.status(200).json({ message: 'ProductCart', cart });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'ProductCart Load Fail' });
  }
};

module.exports = { productCart };