import { Request, Response } from "express";
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
        res.status(200).send({ data: data, success: true, msg: "success" });
    }
    catch (err) {
        console.log("full : ");
        console.log(err);
        res.status(404).send({ msg: "could not create this routes", success: false });
    }
};

export default createOne;