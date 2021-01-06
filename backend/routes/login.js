const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const loginValidation = require('../validation/login.val');

router.post('/', async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  const user = await User.findOne({ email: req.body.email });
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!user || !validPassword) {
    return res.status(400).send({ error: 'Email or password is wrong' });
  }

  // eslint-disable-next-line no-underscore-dangle
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token);

  return res.send({ message: 'Logged In', user });
});

module.exports = router;
