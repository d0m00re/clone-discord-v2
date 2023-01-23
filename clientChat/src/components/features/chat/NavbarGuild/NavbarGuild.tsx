import { useState, useEffect } from "react";
 import * as guildType from "./../../../../service/networkAdapter/chat/guild/guild.entities";
import CardGuild from "./../ChatRoomMain/CardGuild/CardGuild";
import Flex from "./../../../atoms/Flex";
import ModalCreateRoom from "../ModalCreateRoom/ModalCreateRoom";

interface INavbarGuild {
    listGuild: guildType.IGuildId[];
    setGuildSelect: any;
    guildSelect: string;
}

const NavbarGuild = (props: INavbarGuild) => {
    const [modalCreateRoom, setModalCreateRoom] = useState(false);
    const revStateModalCreateRoom = () => { setModalCreateRoom(old => !old) }
    return (
        <>
            <Flex padding="16px 0 0 0" flexDirection="column" gap="16px" backgroundColor="black" height="inherit">
                {
                    props.listGuild.map(elem => <CardGuild

                        key={elem.id}
                        name={elem.title}
                        uuid={elem.uuid}
                        id={elem.id}
                        onClick={() => props.setGuildSelect(elem.uuid)}
                        isSelect={props.guildSelect === elem.uuid}
                    />)
                }
                <button onClick={revStateModalCreateRoom}>
                    add
                </button>
            </Flex>

            {modalCreateRoom &&
                <ModalCreateRoom
                    onRevStateModal={revStateModalCreateRoom}
                    isModalOpen={modalCreateRoom}
                />
            }
        </>
    );
}

export default NavbarGuild;