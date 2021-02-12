const Joi = require('@hapi/joi');

const electionValidation = (data) => {
  const schema = Joi.object({
    _id: Joi.string(),
    title: Joi.string().min(5).required(),
    position: Joi.string().min(5).required(),
    registeredVotes: Joi.array(),
    votes: Joi.array(),
    candidates: Joi.array(),
    __v: Joi.number(),
  });

  return schema.validate(data);
};

module.exports = electionValidation;
