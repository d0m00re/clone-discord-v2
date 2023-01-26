import React, { useState, useEffect } from "react";
import Flex from "./../../../../atoms/Flex/Flex";
import naRoom from "./../../../../../service/networkAdapter/chat/room/room.na";
import * as naEntities from "./../../../../../service/networkAdapter/chat/room/room.entities";
import RoomView from "./../RoomView";

type Props = {
  uuid: string;
  id: number;
};

/*
 ** get all room
 */

const fetchDataRoom = (setState: any, id: number) => {
  naRoom
    .getAll({ GuildId: id })
    .then((resp) => {
      console.log(resp.data.data);
      setState(resp.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const style = {
  select: {
    backgroundColor: "blue",
    color: "white",
  },
  base: {
    backgroundColor: "white",
    color: "blue",
  },
};

function ListRoom(props: Props) {
  const [listRoom, setListRoom] = useState<naEntities.IRoomId[]>([]);
  const [roomSelect, setRoomSelect] = useState<number>(-1);
  useEffect(() => {
    fetchDataRoom(setListRoom, props.id);
  }, []);

  return (
    <section>
      {listRoom.map((elem, id) => {
        let customCss = style[id === roomSelect ? "select" : "base"];

        return (
          <Flex flexDirection="row">
            <section onClick={() => setRoomSelect(id)}>
              <p
                style={{
                  backgroundColor: customCss.backgroundColor,
                  color: customCss.color,
                  cursor: "pointer",
                }}
              >
                #{elem.title} {elem.ownerId}
              </p>
            </section>
            {id === roomSelect ? (
              <RoomView idRoom={listRoom[roomSelect].id} />
            ) : (
              <></>
            )}
          </Flex>
        );
      })}
    </section>
  );
}

export default ListRoom;
