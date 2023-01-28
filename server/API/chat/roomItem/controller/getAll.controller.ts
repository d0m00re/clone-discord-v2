import { Request, Response } from "express";
import sendResponse from "../../../../Service/express/sendResponse";
import roomCrud from "../dao/sequelize/roomItem.crud";

const getAll = async (req: Request, res: Response) => {
    try {
        const body = req.query;
        let data = await roomCrud.findAll({ where: body });
        return sendResponse({
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