import Joi from 'joi';

export const productSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(15)
    .required(),

  price: Joi.number()
    .min(0)
    .max(Number.MAX_SAFE_INTEGER)
    .required(),

  imageUrl: Joi.string()
    .required(),

  desc: Joi.string()
    .min(10)
    .max(100)
    .required(),
});

export const userSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(20)
    .required(),

  password: Joi.string()
    .min(4)
    .max(20)
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required(),

  email: Joi.string()
    .email()
    .required(),

  role: Joi.string()
    .required(),
});

// create review schema yourself
