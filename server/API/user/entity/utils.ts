import * as user from "./entities";
import { v4 as uuidv4 } from 'uuid';

const makeEmptyUser = (): user.IUser => ({
    uuid: uuidv4(),
    firstname: "",
    lastname: "",
    email: "",
    password: ""
});

export {
    makeEmptyUser
}