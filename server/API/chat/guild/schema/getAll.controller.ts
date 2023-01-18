import Joi from 'joi';

const getAllSchema = Joi.object({
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