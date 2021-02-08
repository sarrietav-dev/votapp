/* eslint-disable no-underscore-dangle */
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const sanitize = require('mongo-sanitize');
const User = require('../database/models/User.model');
const registerValidation = require('../validation/register.val');

router.get('/', async (req, res) => {
  try {
    const users = await User.find({ is_admin: false, is_verified: true });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

// FIXME: This rotes has a unknown bug
router.get('/unverified', async (req, res) => {
  try {
    const unverifiedUsers = await User.find(
      { is_verified: false, is_admin: false },
      { name: 1, code: 1, email: 1, gender: 1 }
    );
    return res.status(200).json(unverifiedUsers);
  } catch (error) {
    return res.status(400).send({ error });
  }
});

// TODO: Add rate limiter to this route.
// Create an user
router.post('/', async (req, res) => {
  try {
    const body = sanitize(req.body);

    // General validation
    const { error } = registerValidation(body);
    if (error) return res.status(400).send({ error: error.details[0].message });

    // Email repeatition validation
    const emailExist = await User.findOne({ email: body.email });
    if (emailExist) return res.status(400).send({ error: 'Email exists' });

    // Code repeatition validation
    const codeExist = await User.findOne({ code: body.code });
    if (codeExist) return res.status(400).send({ error: 'Code exists' });

    // Hash password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(body.password, salt);

    const user = new User({
      name: body.name,
      email: body.email,
      password: hashedPassword,
      birthdate: body.birthdate,
      phoneNumber: body.phoneNumber,
      gender: body.gender,
      is_admin: Boolean(body.is_admin),
      code: body.code,
    });

    const savedUser = await user.save();
    return res.status(200).send({ message: 'User created', id: savedUser._id });
  } catch (error) {
    return res.status(400).send({ error });
  }
});

router.patch('/verify/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id, { is_verified: 1, is_admin: 1 });

    if (user.is_admin)
      return res.status(400).json({ error: 'The user is an admin' });

    if (user.is_verified)
      return res.status(400).json({ error: 'The user is already verified' });

    await User.findByIdAndUpdate(id, { is_verified: true });
    return res.status(200).json({ message: 'Operation completed' });
  } catch (error) {
    return res.status(400).send({ error });
  }
});

router.delete('/deny/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id, { is_verified: 1, is_admin: 1 });

    if (user.is_admin)
      return res.status(400).json({ error: 'The user is an admin' });

    if (user.is_verified)
      return res.status(400).json({ error: 'The user is already verified' });

    await User.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Operation completed' });
  } catch (error) {
    return res.status(400).send({ error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
