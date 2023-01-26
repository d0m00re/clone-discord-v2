import React, { useState } from "react";
import { Modal } from "antd";
import * as naEntities from "./../../../../service/networkAdapter/chat/room/room.entities";
import naMesCouilles from "./../../../../service/networkAdapter/chat/room/room.na";
import Input from "./../../../atoms/Input/Input";
import Flex from "./../../../atoms/Flex";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  onRevStateModal: () => void;
  isModalOpen: boolean;
  setListRoom: React.Dispatch<React.SetStateAction<naEntities.IRoomId[]>>;
  idRoom: number;
  guildRoomId: number;
};

function ModalCreateRoom(props: Props) {
  const [data, setData] = useState({ GuildId: -1, title: "" });

  const handleOk = () => {
    naMesCouilles
      .createOne({ ...data, GuildId: props.guildRoomId })
      .then((resp) => {
        toast("success");
        props.setListRoom((old) => [...old, resp.data.data]);
      })
      .catch((err) => {
        toast("fucking error");
      });
    props.onRevStateModal();
  };

  const handleCancel = () => {
    props.onRevStateModal();
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={props.isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h1> create a room </h1>
        <p>ff : {props.guildRoomId}</p>
        <form>
          <Flex flexDirection="column">
            <label>name :</label>
            <Input
              type="text"
              onChange={(event) => {
                event.preventDefault();
                setData((old) => ({ ...old, title: event.target.value }));
              }}
            />
          </Flex>
        </form>
      </Modal>
    </>
  );
}

export default ModalCreateRoom;
