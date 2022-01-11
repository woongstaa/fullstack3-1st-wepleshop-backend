const { productCartService } = require('../services');

const productCartAdd = async (req, res) => {
  try {
    const { userId, productId, color, size, quantity } = req.body;
    console.log('controller before');
    console.log(userId);
    const cart = await productCartService.productCartAdd(
      userId,
      productId,
      color,
      quantity,
      size
    );
    console.log('controller after');
    return res.status(200).json({ message: 'ProductCart', cart });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'ProductCart Load Fail' });
  }
};

const productCartEdit = async (req, res) => {
  try {
    const { userId, productId, color, size, quantity } = req.body;
    const cart = await productCartService.productCartEdit(
      userId,
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

const productCartDelete = async (req, res) => {
  try {
    const { userId, productId, color, size } = req.body;
    const cart = await productCartService.productCartDelete(
      userId,
      productId,
      color,
      size
    );

    return res.status(200).json(cart);
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: err.message });
  }
};

module.exports = { productCartAdd, productCartEdit, productCartDelete };
