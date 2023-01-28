import { Request, Response } from "express";
import sendResponse from "../../../../Service/express/sendResponse";
import dbGuild from "../dao/sequelize/guild.crud";

const getAll = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        let data = await dbGuild.findAll({ where: body });
        sendResponse({
            res,
            status : 200,
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
        });    }
};

export default getAll;