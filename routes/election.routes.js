const router = require('express').Router();
const Election = require('../models/Election.model');
const electionValidation = require('../validation/election.val');

router.post('/', async (req, res) => {
  const { error } = electionValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  // TODO: Check if the requester is an admin.

  const election = new Election({
    title: req.body.title,
    position: req.body.position,
  });

  try {
    await election.save();
    return res.status(200).json({ id: election.id });
  } catch (err) {
    return res.status(400).json({ err });
  }
});

router.get('/', async (req, res) => {
  try {
    const elections = await Election.find({});
    return res.status(200).send(elections);
  } catch (err) {
    return res.status(400).json({ err });
  }
});

module.exports = router;
