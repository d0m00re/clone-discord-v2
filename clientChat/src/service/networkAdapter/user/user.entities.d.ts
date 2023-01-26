export interface IUserInput {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

export interface IUserOutput extends IUserInput {
  uuid: string;
}

export interface IUserId extends IUserOutput {
  id: number;
}

export interface IUserLogin {
  email: string;
  password: string;
}
