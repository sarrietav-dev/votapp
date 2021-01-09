const Joi = require('@hapi/joi');

const electionValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(5).required(),
    position: Joi.string().min(5).required(),
  });

  return schema.validate(data);
};

module.exports = electionValidation;
