export interface IUser {
    uuid: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserId extends IUser {
    id: number;
}