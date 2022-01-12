const { flowService } = require('../services');

const flow = async (req, res) => {
  try {
    const flowlist = await flowService.flow();

    return res.status(200).json({ message: 'flow', flowlist });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'flow Load Fail' });
  }
};

module.exports = { flow };
