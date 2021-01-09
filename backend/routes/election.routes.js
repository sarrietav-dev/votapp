const router = require('express').Router();
const Election = require('../models/Election.model');
const electionValidation = require('../validation/election.val');

router.post('/', (req, res) => {
  const { error } = electionValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
});

module.exports = router;
