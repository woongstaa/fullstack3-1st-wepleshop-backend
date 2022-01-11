const { flowDao } = require('../models');

const flow = async () => {
  const flowSlider = await flowDao.flow();

  if (!flowSlider) {
    const error = new Error('LIST NOT FOUND');
    error.statusCode = 400;
    throw error;
  }
  return flowSlider;
};

module.exports = { flow };
