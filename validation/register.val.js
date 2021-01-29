const Joi = require('@hapi/joi');

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(255).required(),
    password: Joi.string().min(6).max(1024).required(),
    email: Joi.string().min(6).max(1024).required().email(),
    gender: Joi.string(),
    phoneNumber: Joi.string().max(10),
    birthdate: Joi.date(),
    is_admin: Joi.boolean(),
    code: Joi.string().min(6).max(10).required(),
  });

  return schema.validate(data);
};

module.exports = registerValidation;
