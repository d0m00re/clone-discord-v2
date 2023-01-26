import { Request, Response } from "express";
import dbGuild from "../dao/sequelize/guild.crud";

const getAllDump = async (req: Request, res: Response) => {
    try {
        let data = await dbGuild.findAllWithJoin();
        res.status(200).send({ data: data, success: true, msg: "success" });
    }
    catch (err) {
        console.log(err)
        res.status(404).send({ msg: "could not create this routes", success: false });
    }
};

export default getAllDump;