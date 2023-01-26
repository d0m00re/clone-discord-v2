import React, { useState, useEffect } from "react";
import naRoomItem from "./../../../../../service/networkAdapter/chat/roomItem/roomItem.na";
import * as naRoomItemEntities from "./../../../../../service/networkAdapter/chat/roomItem/roomItem.entities";
import Flex from "./../../../../atoms/Flex/Flex";
import Img from "../../../../atoms/Img/Img";

type Props = {
  idRoom: number;
};

const fetchData = (idRoom: number, setData: any) => {
  naRoomItem
    .getAll(idRoom)
    .then((resp) => {
      setData(resp.data.data);
    })
    .catch((err) => {});
};

function RoomView(props: Props) {
  const [listMsg, setListMsg] = useState<naRoomItemEntities.IRoomItemId[]>([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetchData(props.idRoom, setListMsg);
  }, [props.idRoom]);

  const addMessage = (props: naRoomItemEntities.IRoomItem) => {
    naRoomItem
      .createOne({
        RoomId: props.RoomId,
        contentType: "msg",
        content: props.content,
      })
      .then((resp) => {
        console.log([...listMsg, resp.data.data]);
        setListMsg([...listMsg, resp.data.data]);
      })
      .catch((err) => {});
  };

  return (
    <section style={{ width: "100%" }}>
      RoomView : {props.idRoom}
      <Flex flexDirection="column" gap="25px">
        {listMsg.map((elem) => (
          <Flex gap="10px">
            <Img
              width="50px"
              height="50px"
              borderRadius="50%"
              src={`https://images.hdqwalls.com/wallpapers/pickle-rick-s0.jpg`}
            />
            <Flex flexDirection="column" gap="5px">
              <p style={{ margin: "0" }}>
                <strong>jack lapiquette</strong>
              </p>
              <p style={{ margin: "0" }} key={elem.id}>
                {elem.content}
              </p>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
      <button
        onClick={() =>
          // @ts-ignore
          addMessage({
            RoomId: props.idRoom,
            contentType: "msg",
            content: msg,
          })
        }
      >
        valider
      </button>
    </section>
  );
}

export default RoomView;
