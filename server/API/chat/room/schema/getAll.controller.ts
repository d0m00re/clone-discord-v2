import Joi from 'joi';

const getAllSchema = Joi.object({
    GuildId: Joi.number().optional(),
    title: Joi.string()
        .min(2)
        .max(50).optional(),
    uuid: Joi.string()
        .min(2)
        .max(50).optional(),
    ownerId: Joi.number().optional(),
    // .required(),
    id: Joi.number().optional()
});

export default getAllSchema;