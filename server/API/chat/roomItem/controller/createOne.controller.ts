import { Request, Response } from "express";
import dbRoom from "./../dao/sequelize/roomItem.crud";

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
        res.status(200).send({ data: data, success: true, msg: "success" });
    }
    catch (err) {
        res.status(404).send({ msg: "could not create this routes", success: false });
    }
};

export default createOne;