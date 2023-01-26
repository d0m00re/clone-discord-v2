import * as userEntities from "./user.entities";

export const makeEmptyUserInput = (): userEntities.IUserInput => ({
  email: "",
  password: "",
  firstname: "",
  lastname: "",
});

export const makeEmptyUserOutput = (): userEntities.IUserOutput => ({
  ...makeEmptyUserInput(),
  uuid: "",
});

export const makeEmptyUserId = () => ({
  ...makeEmptyUserOutput(),
  id: -2,
});
