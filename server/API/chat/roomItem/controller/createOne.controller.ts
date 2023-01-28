import { Request, Response } from "express";
import dbRoom from "./../dao/sequelize/roomItem.crud";
import sendResponse from "../../../../Service/express/sendResponse";
const createOne = async (req: Request, res: Response) => {
    const body = req.body;

    // check is this join exist or not

    try {
        let data = await dbRoom.createOne({
            RoomId: body.RoomId,
            ownerId: res.locals.id,
            contentType: body.contentType,
            content: body.content
        });
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

export default createOne;