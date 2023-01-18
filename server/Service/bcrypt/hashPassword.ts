import * as bcrypt from "bcrypt-nodejs";

const hashPassword = (password : string) => {
    return bcrypt.hashSync(password);
}

export default hashPassword;