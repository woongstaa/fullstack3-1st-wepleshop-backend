const { slideDao } = require('../models');

const slide = async (id) => {
  const slider = await slideDao.slide();

  if (!slider) {
    const error = new Error('LIST NOT FOUND');
    error.statusCode = 400;
    throw error;
  }
  return slider;
};

module.exports = { slide };
