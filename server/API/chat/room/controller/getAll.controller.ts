import { Request, Response } from "express";
import sendResponse from "../../../../Service/express/sendResponse";
import roomCrud from "../dao/sequelize/room.crud";

const getAll = async (req: Request, res: Response) => {
    try {
        const query = req.query;
        console.log({ where: query })
        let data = await roomCrud.findAll({ where: query });
        return sendResponse({
            res,
            status : 200,
            data: data,
            msg: "success"
        });    }
    catch (err) {
        return sendResponse({
            res,
            status : 404,
            data: {},
            msg: "error"
        });    }
};

export default getAll;