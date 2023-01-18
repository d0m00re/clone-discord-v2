import Joi from 'joi';

const createOneSchema = Joi.object({
    title: Joi.string()
        .min(2)
        .max(50)
        .optional(),
    //  ownerId: Joi.number().optional()
});

export default createOneSchema;