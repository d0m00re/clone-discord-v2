import Joi from 'joi';

const registerSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required()
});

export default registerSchema;