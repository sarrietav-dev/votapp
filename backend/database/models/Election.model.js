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
    type: [
      new mongoose.Schema({
        _id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
          min: 4,
          max: 255,
        },
        email: {
          type: String,
          required: true,
          min: 6,
          max: 1024,
        },
        code: {
          type: String,
          required: true,
        },
        votes: {
          type: Number,
          default: 0,
        },
      }),
    ],
    default: [],
  },
});

module.exports = mongoose.model('Election', electionSchema);
