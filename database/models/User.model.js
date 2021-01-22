const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  birthdate: {
    type: Date,
    default: Date.now,
  },
  phoneNumber: {
    type: String,
    max: 10,
  },
  gender: {
    type: Boolean,
    default: true,
  },
  constraints: {
    type: new mongoose.Schema({
      is_admin: {
        type: Boolean,
        default: false,
      },
    }),
  },
});

module.exports = mongoose.model('User', userSchema);
