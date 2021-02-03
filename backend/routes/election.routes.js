/* eslint-disable no-underscore-dangle */
const router = require('express').Router();
const sanitize = require('mongo-sanitize');
const Election = require('../database/models/Election.model');
const electionValidation = require('../validation/election.val');

router.post('/', async (req, res) => {
  try {
    const body = sanitize(req.body);

    const { error } = electionValidation(body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const candidates = body.candidates.map((candidate) => ({
      _id: candidate._id,
      name: candidate.name,
      code: candidate.code,
      email: candidate.email,
    }));

    // TODO: Check if the requester is an admin.

    const election = new Election({
      title: body.title,
      position: body.position,
      candidates,
    });

    await election.save();
    return res.status(200).send(election);
  } catch (error) {
    return res.status(400).json({ err: error });
  }
});

router.get('/', async (req, res) => {
  try {
    const elections = await Election.find();
    return res.status(200).send(elections);
  } catch (error) {
    return res.status(400).json({ err: error });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const body = sanitize(req.body);
    const { error } = electionValidation(body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const election = await Election.updateOne(
      { _id: req.params.id },
      { ...body }
    );

    return res.status(200).json(election);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const election = await Election.findOne({ _id: req.params.id });
    if (!election) return res.status(404).json({ error: 'Election not found' });

    await Election.deleteOne({ _id: req.params.id });
    return res.sendStatus(200);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
