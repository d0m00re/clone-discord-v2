import modelUser from "./user.model";
import * as entityUser from "../../entity/entities"
import { v4 as uuidv4 } from 'uuid';
import { WhereOptions, IncludeOptions, FindAttributeOptions } from "sequelize";

interface IUserCrud {
  where?: Partial<entityUser.IUserId>;
  include?: IncludeOptions[];
  attributes?: FindAttributeOptions;
  createData?: entityUser.IUser;
  updateData?: entityUser.IUserId;
}

class User {
  createOne(props: Omit<entityUser.IUser, 'uuid'>) {
    return modelUser.create({
      ...props,
      uuid: uuidv4()
    })
  }

  findOne(props: IUserCrud) {
    return modelUser.findOne(props)
  }

  findAll(props: IUserCrud) {
    return modelUser.findAll(props)
  }

  async deleteOne(id: number) {
    let elem = await modelUser.findOne({ where: { id: id } });
    let data = await elem?.destroy();
    return data;
  }

  putOne() {

  }
}

export default new User();