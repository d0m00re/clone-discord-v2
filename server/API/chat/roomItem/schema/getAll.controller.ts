import Joi from 'joi';

const getAllSchema = Joi.object({
    RoomId: Joi.number().optional(),
    ownerId: Joi.number().optional(),
    title: Joi.string().optional(),
    desc: Joi.string().optional(),
    contentType: Joi.string().optional(),
    content: Joi.string().optional(),
});

export default getAllSchema;