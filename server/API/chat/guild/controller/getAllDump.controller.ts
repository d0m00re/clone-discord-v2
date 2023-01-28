import { Request, Response } from "express";
import sendResponse from "../../../../Service/express/sendResponse";
import dbGuild from "../dao/sequelize/guild.crud";

const getAllDump = async (req: Request, res: Response) => {
    try {
        let data = await dbGuild.findAllWithJoin();
        sendResponse({
            res,
            status : 200,
            data: data,
            msg: "success"
        });
    }
    catch (err) {
        console.log(err);
        return sendResponse({
            res,
            status : 404,
            data: {},
            msg: "error"
        });
    }
};

export default getAllDump;