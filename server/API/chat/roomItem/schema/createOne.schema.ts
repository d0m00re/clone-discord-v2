import Joi from 'joi';

const createOneSchema = Joi.object({
    RoomId: Joi.number().required(),
    contentType: Joi.string().required(),
    content: Joi.string().required(),
});

export default createOneSchema;