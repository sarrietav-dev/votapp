const mongoose = require('mongoose');

const electionSchema = new mongoose.Schema({
  title: {
    type: String,
    min: 5,
    required: true,
  },
  position: {
    type: String,
    min: 5,
    required: true,
  },
  registeredVotes: {
    type: Array,
    default: [],
  },
  candidates: {
    type: Array,
    default: [],
  },
  votes: {
    type: [
      new mongoose.Schema({
        voter: {
          type: mongoose.Types.ObjectId,
          required: true,
        },
        campaign: {
          type: mongoose.Types.ObjectId,
          required: true,
        },
      }),
    ],
    default: [],
  },
});

module.exports = mongoose.model('Election', electionSchema);
