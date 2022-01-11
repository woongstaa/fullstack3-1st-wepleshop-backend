const { productCartService } = require('../services');

const productCartAdd = async (req, res) => {
  try {
    const { productId, color, size, quantity } = req.body;
    const cart = await productCartService.productCartAdd(
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

const productCartEdit = async (req, res) => {
  try {
    const { productId, color, size, quantity } = req.body;
    const cart = await productCartService.productCartEdit(
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
    const { productId, color, size, quantity } = req.body;
    const cart = await productCartService.productCartDelete(
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

module.exports = { productCartAdd, productCartEdit, productCartDelete };
