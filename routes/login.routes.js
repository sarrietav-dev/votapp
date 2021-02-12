/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sanitize = require('mongo-sanitize');
const User = require('../database/models/User.model');
const loginValidation = require('../validation/login.val');

router.post('/', async (req, res) => {
  const body = sanitize(req.body);

  // Validate with Joi
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const user = await User.findOne({ email: body.email });
  if (!user)
    return res.status(400).send({ error: 'Email or password is wrong' });

  if (!user.is_admin && !user.is_verified)
    return res.status(400).json({ error: 'The user is not verified' });


  // Check if password is valid.
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send({ error: 'Email or password is wrong' });

  // eslint-disable-next-line no-underscore-dangle
  const token = jwt.sign(
    { _id: user._id, is_admin: user.is_admin },
    process.env.TOKEN_SECRET
  );
  res.header('auth-token', token);

  return res.send({ message: 'Logged In', token, _id: user._id, is_admin: user.is_admin });
});

module.exports = router;
