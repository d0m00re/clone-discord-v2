import { Request, Response, NextFunction } from "express";
import sendResponse from "../../../Service/express/sendResponse";
import userCrud from "../dao/sequelize/user.crud";

const me = async (req: Request, res: Response) => {
    try {
        let data = await userCrud.findOne({
            where: {
                id: res.locals.id
            },
            attributes: [
                "email", "uuid", "firstname", "lastname"
            ]
        });

        if (!data)
            return sendResponse({
                res,
                status: 404,
                data: {},
                msg: "error"
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
            status : 404,
            data: {},
            msg: "error"
        });
    }
};

export default me;