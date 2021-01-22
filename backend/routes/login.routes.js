const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User.model');
const loginValidation = require('../validation/login.val');

router.post('/', async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).send({ error: 'Email or password is wrong' });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send({ error: 'Email or password is wrong' });

  // eslint-disable-next-line no-underscore-dangle
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token);

  return res.send({ message: 'Logged In', token });
});

module.exports = router;
