/* eslint-disable no-underscore-dangle */
const router = require('express').Router();
const Election = require('../database/models/Election.model');
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
    return res.status(200).send(election);
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

router.patch('/:id', async (req, res) => {
  const { error } = electionValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const election = await Election.updateOne(
      { _id: req.body._id },
      { ...req.body }
    );

    return res.status(200).json(election);
  } catch (err) {
    return res.status(400).json({ err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Election.deleteOne({ _id: req.params.id });
    return res.sendStatus(200);
  } catch (err) {
    return res.status(400).json({ err });
  }
});

module.exports = router;
