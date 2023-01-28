import { Request, Response } from "express";
import dbGuild from "../dao/sequelize/guild.crud";
import sendResponse from "../../../../Service/express/sendResponse";;

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
        sendResponse({
            res,
            status :404,
            data : {},
            msg: "could not create this routes"});
    }
};

export default getAll;