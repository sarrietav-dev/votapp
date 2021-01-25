const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../database/models/User.model');
const registerValidation = require('../validation/register.val');

// TODO: Make get '/' route to get all the users.
router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

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
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    birthdate: req.body.birthdate,
    phoneNumber: req.body.phoneNumber,
    gender: Boolean(req.body.gender),
    is_admin: Boolean(req.body.is_admin),
    code: req.body.code,
  });

  try {
    const savedUser = await user.save();
    // TODO: Delete user for security reasons.
    return res.status(200).send({ message: 'User created', savedUser });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

router.get('/unverified', async (req, res) => {
  try {
    const unverifiedUsers = await User.find(
      { is_verified: false },
      { name: 1, code: 1, email: 1, gender: 1 }
    );
    return res.status(200).json(unverifiedUsers);
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

module.exports = router;
