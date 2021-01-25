const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../database/models/User.model');
const registerValidation = require('../validation/register.val');

router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

// TODO: Make get '/:id' route to get one user.

// Create an user
router.post('/', async (req, res) => {
  try {
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

    const savedUser = await user.save();
    // TODO: Delete user for security reasons.
    return res.status(200).send({ message: 'User created', savedUser });
  } catch (error) {
    return res.status(400).send({ error });
  }
});

router.get('/unverified', async (req, res) => {
  try {
    const unverifiedUsers = await User.find(
      { is_verified: false },
      { name: 1, code: 1, email: 1, gender: 1 }
    );
    return res.status(200).json(unverifiedUsers);
  } catch (error) {
    return res.status(400).send({ error });
  }
});

router.post('/verify/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne(
      { _id: id },
      { is_verified: 1, is_admin: 1 }
    );

    if (user.is_admin)
      return res.status(400).json({ error: 'the user is an admin' });

    if (user.is_verified)
      return res.status(400).json({ error: 'The user is already verified' });

    await User.updateOne({ _id: id }, { is_verified: true });
    return res.status(200).json({ message: 'Operation completed' });
  } catch (error) {
    return res.status(400).send({ error });
  }
});



module.exports = router;
