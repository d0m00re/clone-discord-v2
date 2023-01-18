import sendResponse from '../../Service/express/sendResponse';

const joiSchemaBodyValidation = (schema: any) => {
  return (req: any, res: any, next: any) => {
    const { error } = schema.validate(req.body);
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i: any) => i.message).join(',');
      sendResponse(res, 422, details, message, false);
    }
  }
}

export default joiSchemaBodyValidation;