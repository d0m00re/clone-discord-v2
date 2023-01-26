import * as entity from "./roomItem.entities";
import { v4 as uuidv4 } from "uuid";

const makeEmptyRoomItem = (): entity.IRoomItem => ({
  RoomId: -1,
  uuid: uuidv4(),
  contentType: "msg",
  content: "",
  ownerId: -1,
});

export { makeEmptyRoomItem };
