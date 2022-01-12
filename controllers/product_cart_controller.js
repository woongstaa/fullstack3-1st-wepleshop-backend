const { productCartService } = require('../services');

const productCartAdd = async (req, res) => {
  try {
    const { userId, productId, color, quantity, size, name, price, image } =
      req.body;
    const cart = await productCartService.productCartAdd(
      userId,
      productId,
      color,
      quantity,
      size,
      name,
      price,
      image
    );
    return res.status(200).json({ message: 'ProductCart', cart });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'ProductCart Load Fail' });
  }
};

const productCartEdit = async (req, res) => {
  try {
    const { userId, productId, color, quantity, size } = req.body;
    const cart = await productCartService.productCartEdit(
      userId,
      productId,
      color,
      quantity,
      size
    );

    return res.status(200).json(cart);
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: 'ProductCartEdit Fail' });
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

    return res.status(400).json({ message: 'ProductCartDelete Fail' });
  }
};

const productCartGet = async (req, res) => {
  try {
    const { userId } = req.body;
    const cart = await productCartService.productCartGet(userId);

    return res.status(200).json({ message: 'ProductCart', cart });
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: 'ProductCartGet Fail' });
  }
};

module.exports = {
  productCartAdd,
  productCartEdit,
  productCartDelete,
  productCartGet,
};
