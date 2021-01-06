const router = require('express').Router();
const User = require('../models/User');
const registerValidation = require('../validation/register.val');

// Get all users
router.get('/', (req, res) => {});

// Get an user
router.get('/:id', (req, res) => {});

// Create an user
router.post('/', async (req, res) => {
  // General validation
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  // Email repeatition validation
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send({ error: 'Email exists' });

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    birthdate: Date.parse(req.body.birthdate),
    phoneNumber: req.body.phoneNumber,
    gender: Boolean(req.body.gender),
  });

  try {
    await user.save();
    return res.status(200).send({ message: 'User created' });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});
