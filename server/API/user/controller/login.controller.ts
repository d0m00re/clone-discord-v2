import { Request, Response } from "express";
import userCrud from "../dao/sequelize/user.crud";
import * as sBCrypt from "./../../../Service/bcrypt";
import jwt from 'jsonwebtoken';
import sendResponse from "../../../Service/express/sendResponse";

interface IGenerateAccessToken {
    email: string;
    id: number;
}

function generateAccessToken(infoUser: IGenerateAccessToken) {
    return jwt.sign(infoUser, process.env.ACCESS_TOKEN_SECRET ?? "", { expiresIn: '180000s' });
}

const login = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        let data = await userCrud.findOne({
            where: {
                email: body.email
            }
        });

        if (!data || !sBCrypt.comparePasswordAndHash(body.password, data.password) )
        return sendResponse({
            res,
            status : 404,
            data: {},
            msg: "invalid login information"
        });
        let token = generateAccessToken({ email: data.email, id: data.id });

        // generate access token
        console.log(token);

        res.cookie('auth', token, { maxAge: 90000000, httpOnly: false });

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

export default login;