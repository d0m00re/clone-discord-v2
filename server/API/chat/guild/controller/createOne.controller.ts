import { Request, Response } from "express";
import dbGuild from "./../dao/sequelize/guild.crud";
import sendResponse from '../../../../Service/express/sendResponse';


const createOne = async (req: Request, res: Response) => {
    const body = req.body;

    try {
        let data = await dbGuild.createOne({
            ownerId: res.locals.id,//body.ownerId,
            title: body.title,
        });

        return sendResponse({
            res,
            status : 200,
            data,
            msg : "success create data"
        });
    }
    catch (err) {
        return sendResponse({
            res,
            data : {},
            status : 404,
            msg : "error creer"
        })
    }
};

export default createOne;