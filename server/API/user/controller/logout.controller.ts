import { Request, Response } from "express";
import sendResponse from "../../../Service/express/sendResponse";

const logout = async (req: Request, res: Response) => {
    try {
        res.clearCookie('auth');

        return sendResponse({
            res,
            status : 200,
            data: {},
            msg: "logout success"
        });
    }
    catch (err) {
        return sendResponse({
            res,
            status : 404,
            data: {},
            msg: "error"
        });    }
};

export default logout;