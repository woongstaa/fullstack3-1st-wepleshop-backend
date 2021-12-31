const getPing = async (req, res) => {
  try {
    return res.status(200).json({ message: 'pong' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { getPing };
