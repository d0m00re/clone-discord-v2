import { Request, Response } from "express";
import dbGuild from "./../dao/sequelize/guild.crud";

const createOne = async (req: Request, res: Response) => {
    const body = req.body;

    try {
        console.log(" res locals")
        console.log(res.locals)
        let data = await dbGuild.createOne({
            ownerId: res.locals.id,//body.ownerId,
            title: body.title,
        });
        res.status(200).send({ data: data, success: true, msg: "success" });
    }
    catch (err) {
        res.status(404).send({ msg: "could not create this routes", success: false });
    }
};

export default createOne;