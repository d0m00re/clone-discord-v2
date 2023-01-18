import bcrypt from "bcrypt-nodejs";

const comparePasswordAndHash = (password : string, hashPassword : string) => {
    console.log(`${password} === ${hashPassword}`)
    return bcrypt.compareSync(password, hashPassword);
}

export default comparePasswordAndHash;