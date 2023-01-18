import { Request, Response, NextFunction } from "express";
import userCrud from "../dao/sequelize/user.crud";

const me = async (req: Request, res: Response) => {
    try {
        let data = await userCrud.findOne({
            where: {
                id: res.locals.id
            },
            attributes: [
                "email", "uuid", "firstname", "lastname"
            ]
        });

        if (!data)
            return res.status(404).send({ msg: "user not found", success: false });
        return res.status(200).send({ data: data, success: true, msg: "success" });
    }
    catch (err) {
        return res.status(404).send({ msg: "could not create this routes", success: false });
    }
};

export default me;