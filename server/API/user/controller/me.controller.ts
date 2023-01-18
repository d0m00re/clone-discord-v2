import { Request, Response, NextFunction } from "express";
import userCrud from "../dao/sequelize/user.crud";

const me = async (req: Request, res: Response) => {
    try {
        const body = req.body;

        /*
        ** 
        */
        // let cookieAuth = getToken(req.cookies, 'auth');

        let data = await userCrud.findOne({
            where: {
                id: res.locals.id
            }
        });

        if (!data)
            return res.status(404).send({ msg: "invalid route creation", success: false });
        console.log(" cookie")
        console.log(req.cookies);
        return res.status(200).send({ data: data, success: true, msg: "success" });
    }
    catch (err) {
        return res.status(404).send({ msg: "could not create this routes", success: false });
    }
};

export default me;