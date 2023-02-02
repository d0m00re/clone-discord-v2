import React, { useState } from "react";
import { Button, Modal } from "antd";
import Input from "./../../../atoms/Input/Input";
import Flex from "./../../../atoms/Flex/Flex";
import naGuild from "./../../../../service/networkAdapter/chat/guild/guild.na";
import toast, { Toaster } from "react-hot-toast";
import * as guildType from "./../../../../service/networkAdapter/chat/guild/guild.entities";

type Props = {
  setListGuild: (guild : guildType.IGuildId) => {};
  onRevStateModal: () => void;
  isModalOpen: boolean;
};

function ModalCreateGuild(props: Props) {
  const [data, setData] = useState({ title: "" });

  const handleOk = (event: any) => {
    event.preventDefault();
    // create room
    naGuild
      .createOne(data)
      .then((resp) => {
        props.setListGuild(resp.data.data);
        toast("success create room");
        props.onRevStateModal();
      })
      .catch((err) => {
        toast("fail create room");
        console.log(err);
      });
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
        <h3> create a room</h3>
        <form>
          <Flex flexDirection="column">
            <label>guild name :</label>
            <Input
              type={"text"}
              value={data.title}
              onChange={(event) =>
                setData((old) => ({ ...old, title: event.target.value }))
              }
            />
          </Flex>
        </form>
      </Modal>
    </>
  );
}

export default ModalCreateGuild;
