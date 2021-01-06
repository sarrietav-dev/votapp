const Joi = require('@hapi/joi');

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    password: Joi.string().min(6).max(1024).required(),
    email: Joi.string().min(6).max(1024).required().email(),
    gender: Joi.boolean().required(),
    phoneNumber: Joi.string().max(10),
    birthday: Joi.date(),
  });

  return schema.validate(data);
};

module.exports = registerValidation;
