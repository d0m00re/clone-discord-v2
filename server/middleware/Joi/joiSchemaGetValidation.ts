import { NextFunction } from 'express';
import sendResponse from '../../Service/express/sendResponse';

const joiSchemaGetValidation = (schema: any, includeValue?: boolean) => {
  return (req: any, res: any, next: NextFunction) => {
    const { error, value } = schema.validate(req.query);
    const valid = error == null;

    if (valid) {
      req.query = value;
      // include parsed type by joi
      if (includeValue)
        req.params = { ...req.params, ...value }
      next();
    } else {
      const { details } = error;
      const errors = details.map((i: any) => i.message).join(',');
      sendResponse({
        res,
        status :422,
        data : {},
        msg : 'error create',
        errors : errors
        });
    }
  }
}

export default joiSchemaGetValidation;
