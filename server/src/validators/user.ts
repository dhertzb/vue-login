const Joi = require("joi");

const schema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(10).required(),

  lastName: Joi.string().alphanum().min(3).max(10).required(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
''
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
});
