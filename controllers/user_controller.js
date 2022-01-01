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

    const token = await userService.signIn(email, password);
    return res.status(200).json({ message: 'LOGIN_SUCCEES', user, token });
  } catch (err) {
    console.log('controller error: ', err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const REQUIRED_KEYS = { email, password };

    for (let key in REQUIRED_KEYS) {
      if (!REQUIRED_KEYS[key]) {
        return res.status(400).json({ message: 'KEY_ERROR' });
      }
    }

    const checkEmail = email.includes('@') ? true : false;
    const checkPw = password.length >= 8 ? true : false;

    if (!checkEmail || !checkPw) {
      const error = new Error('Check your Email or Password again');
      error.statusCode = 400;

      throw error;
    }

    const user = await userService.signUp(name, email, password);

    return res
      .status(201)
      .json({ message: 'REGISTER_SUCCEES', email, password });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { signIn, signUp };
