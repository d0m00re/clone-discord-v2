import sendResponse from '../../Service/express/sendResponse';

const joiSchemaBodyValidation = (schema: any) => {
  return (req: any, res: any, next: any) => {
    const { error } = schema.validate(req.body);
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;
      const errors = details.map((i: any) => i.message).join(',');
      return sendResponse({
        res,
        status : 422,
        data : {},
        msg : "error create",
        errors : errors
        });
    }
  }
}

export default joiSchemaBodyValidation;