const rateLimiter = require('express-rate-limit');

const registrationLimiter = rateLimiter({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: 'Too accounts created, please try again after 1 hour',
});

module.exports = registrationLimiter;
