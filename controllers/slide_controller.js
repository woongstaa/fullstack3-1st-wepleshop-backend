const { productListService } = require('../services');

const slide = async (req, res) => {
  try {
    const { id } = req.body;
    const list = await productListService.productList(id);
    return res.status(201).json({ message: 'Slide' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Slide Load Fail' });
  }
};
