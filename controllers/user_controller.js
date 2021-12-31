const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const REQUIRED_KEYS = { email, password };

    for (let key in REQUIRED_KEYS) {
      if (!REQUIRED_KEYS[key]) {
        return res.status(400).json({ message: 'KEY_ERROR' });
      }
    }

    const user = await userService.signIn(email, password);
    const token = jwt.sign({ id: 1 }, email, { expiresIn: '30m' });
    return res.status(200).json({ message: 'LOGIN_SUCCEES', user, token });
  } catch (err) {
    console.log('controller error: ', err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await userService.signUp(name, email, password);

    return res.status(200).json({ message: 'REGISTER_SUCCEES' });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { signIn, signUp };
