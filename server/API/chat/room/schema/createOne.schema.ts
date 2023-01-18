import Joi from 'joi';

const createOneSchema = Joi.object({
    GuildId: Joi.number().required(),
    title: Joi.string().required()
});

export default createOneSchema;