const router = require('express').Router();
const Joi = require('@hapi/joi');
const User = require('../models/User');

// Get all users
router.get('/', (req, res) => {});

// Get an user
router.get('/:id', (req, res) => {});


// Create an user
router.post('/', async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error });

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    birthdate: Date.parse(req.body.birthdate),
    phoneNumber: req.body.phoneNumber,
    gender: Boolean(req.body.gender),
  });

  try {
    const savedUser = await user.save();
    res.status(200).json({ message: 'User created' });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
