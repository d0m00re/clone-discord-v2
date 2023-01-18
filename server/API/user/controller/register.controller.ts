import { Request, Response } from "express";
import dbUser from "./../dao/sequelize/user.crud";
import * as sBCrypt from "./../../../Service/bcrypt";
const register = async (req: Request, res: Response) => {
    const body = req.body;

    // check is this join exist or not

    try {
        let data = await dbUser.createOne({
            email: body.email,
            password: sBCrypt.hashPassword(body.password),
            firstname: body.firstname,
            lastname: body.lastname
        });
        res.status(200).send({ data: data, success: true, msg: "success" });
    }
    catch (err) {
        res.status(404).send({ msg: "could not create this routes", success: false });
    }
};

export default register;