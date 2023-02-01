import { useState, useEffect } from "react";
import * as guildType from "./../../../../service/networkAdapter/chat/guild/guild.entities";
import CardGuild from "./../ChatRoomMain/CardGuild/CardGuild";
import Flex from "./../../../atoms/Flex";
import ModalCreateGuild from "../ModalCreateGuild/ModalCreateGuild";
import Img from "./../../../atoms/Img/Img";
import AssetPlus from "./../../../../assets/plus.png";
import { CustomFlex } from "./../../chat/ChatRoomMain/CardGuild/CardGuild";
interface INavbarGuild {
  setListGuild: React.Dispatch<React.SetStateAction<guildType.IGuildId[]>>;
  listGuild: guildType.IGuildId[];
  setGuildSelect: any;
  guildSelect: string;
}

const NavbarGuild = (props: INavbarGuild) => {
  const [modalCreateGuild, setModalCreateGuild] = useState(false);
  const revStateModalCreateGuild = () => {
    setModalCreateGuild((old) => !old);
  };
  
  return (
    <>
      <Flex
        padding="16px 0 0 0"
        flexDirection="column"
        gap="16px"
        backgroundColor="black"
        height="inherit"
      >
        {props?.listGuild && props?.listGuild?.length  && props?.listGuild?.map((elem) => (
          <CardGuild
            key={elem.id}
            name={elem.title}
            uuid={elem.uuid}
            id={elem.id}
            onClick={() => props.setGuildSelect(elem.uuid)}
            isSelect={props.guildSelect === elem.uuid}
          />
        ))}
        <CustomFlex onClick={() => {}} isSelect={false}>
          <div />
          <Img
            width="50px"
            height="50px"
            src={AssetPlus}
            onClick={revStateModalCreateGuild}
          />
        </CustomFlex>
      </Flex>

      {modalCreateGuild && (
        <ModalCreateGuild
          onRevStateModal={revStateModalCreateGuild}
          isModalOpen={modalCreateGuild}
          setListGuild={props.setListGuild}
        />
      )}
    </>
  );
};

export default NavbarGuild;
