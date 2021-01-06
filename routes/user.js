const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const registerValidation = require('../validation/register.val');

// TODO: Make get '/' route to get all the users.

// TODO: Make get '/:id' route to get one user.

// Create an user
router.post('/', async (req, res) => {
  // General validation
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  // Email repeatition validation
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send({ error: 'Email exists' });

  // Hash password
  const salt = await bcrypt.genSalt(25);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    birthdate: Date.parse(req.body.birthdate),
    phoneNumber: req.body.phoneNumber,
    gender: Boolean(req.body.gender),
  });

  try {
    await user.save();
    return res.status(200).send({ message: 'User created', user });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

module.exports = router;
