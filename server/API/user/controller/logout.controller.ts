import { Request, Response } from "express";

const logout = async (req: Request, res: Response) => {
    try {
        res.clearCookie('auth');

        res.status(200).send({ data: "", success: true, msg: "logout success" });
    }
    catch (err) {
        res.status(404).send({ msg: "could not create this routes", success: false });
    }
};

export default logout;