const { flowDao } = require('../models');

const flow = async () => {
  const flowlist = await flowDao.flow();

  if (!flowlist) {
    const error = new Error('LIST NOT FOUND');
    error.statusCode = 400;
    throw error;
  }
  return flowlist;
};

module.exports = { flow };
