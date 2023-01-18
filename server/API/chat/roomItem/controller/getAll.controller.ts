import { Request, Response } from "express";
import roomCrud from "../dao/sequelize/roomItem.crud";

const getAll = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        let data = await roomCrud.findAll({ where: body });
        res.status(200).send({ data: data, success: true, msg: "success" });
    }
    catch (err) {
        res.status(404).send({ msg: "could not create this routes", success: false });
    }
};

export default getAll;