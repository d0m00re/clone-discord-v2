import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import userCrud from "../../API/user/dao/sequelize/user.crud";
// get auth token
const getToken = (cookie: any, key: string) => {
  return cookie[key];
}

/*
** midleware heck connect or not
*/
//{email : string, id : number}
async function authenticate(req: Request, res: Response, next: NextFunction) {
  console.log("cookie")
  console.log(res.locals.cookie)

  let cookieAuth = getToken(req.cookies, 'auth');

  if (!cookieAuth) {
    return res.sendStatus(401);
  }

  let tokenDecoded: any = jwt.verify(cookieAuth, process.env.ACCESS_TOKEN_SECRET ?? "");

  let data = await userCrud.findOne({
    where: {
      id: tokenDecoded.id
    }
  });

  if (!data) {
    return res.sendStatus(401);
  }

  // res.locals.user = data;
  res.locals.email = tokenDecoded.email;
  res.locals.id = tokenDecoded.id;

  next();
}

export default authenticate;