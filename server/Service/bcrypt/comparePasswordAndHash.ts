import bcrypt from "bcrypt-nodejs";

const comparePasswordAndHash = (password : string, hashPassword : string) => {
    return bcrypt.compareSync(password, hashPassword);
}

export default comparePasswordAndHash;