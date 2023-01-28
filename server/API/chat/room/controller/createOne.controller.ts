import { Request, Response } from "express";
import sendResponse from "../../../../Service/express/sendResponse";
import dbRoom from "./../dao/sequelize/room.crud";

const createOne = async (req: Request, res: Response) => {
    const body = req.body;

    // check is this join exist or not
    try {
        let data = await dbRoom.createOne({
            GuildId: body.GuildId,
            ownerId: res.locals.id,
            title: body.title,
        });
        return sendResponse({
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
        });    }
};

export default createOne;