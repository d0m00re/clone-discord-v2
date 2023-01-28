import { Request, Response } from "express";
import dbUser from "./../dao/sequelize/user.crud";
import * as sBCrypt from "./../../../Service/bcrypt";
import sendResponse from "../../../Service/express/sendResponse";
const register = async (req: Request, res: Response) => {
    const body = req.body;

    // check is this join exist or not

    try {
        let data = await dbUser.createOne({
            email: body.email,
            password: sBCrypt.hashPassword(body.password),
            firstname: body.firstname,
            lastname: body.lastname
        });
        return sendResponse({
            res,
            status: 200,
            data: data,
            msg: "success"
        });
    }
    catch (err) {
        return sendResponse({
            res,
            status: 404,
            data: {},
            msg: "error"
        });
    }
};

export default register;