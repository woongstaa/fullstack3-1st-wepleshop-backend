const { slideService } = require('../services');

const slide = async (req, res) => {
  try {
    const productSlide = await slideService.slide();
    console.log(1);
    return res.status(200).json({ message: 'Slide', productSlide });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Slide Load Fail' });
  }
};

module.exports = { slide };
