import { Request, Response } from "express";
import roomCrud from "../dao/sequelize/room.crud";

const getAll = async (req: Request, res: Response) => {
    try {
        const query = req.query;
        console.log({ where: query })
        let data = await roomCrud.findAll({ where: query });
        res.status(200).send({ data: data, success: true, msg: "success" });
    }
    catch (err) {
        res.status(404).send({ msg: "could not create this routes", success: false });
    }
};

export default getAll;