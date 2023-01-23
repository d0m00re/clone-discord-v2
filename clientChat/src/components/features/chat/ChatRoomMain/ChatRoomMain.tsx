import { useState, useEffect } from "react";

import guildNa from "./../../../../service/networkAdapter/chat/guild/guild.na";
import naRoom from "./../../../../service/networkAdapter/chat/room/room.na";


import * as guildType from "./../../../../service/networkAdapter/chat/guild/guild.entities";
import styled from "styled-components";
import CardGuild from "./CardGuild/CardGuild";
import Flex from "./../../../atoms/Flex";
import ModalCreateRoom from "../ModalCreateRoom/ModalCreateRoom";
import NavbarGuild from "../NavbarGuild/NavbarGuild";
import NavbarRoomList from "../NavbarRoomList/NavbarRoomList";
import * as naEntities from "./../../../../service/networkAdapter/chat/room/room.entities";
import RoomView from "./RoomView";
const ChatRoomMain = () => {
    const [listGuild, setListGuild] = useState<guildType.IGuildId[]>([]);
    const [guildSelect, setGuildSelect] = useState<string | null>(null);

    const [listRoom, setListRoom] = useState<naEntities.IRoomId[]>([]);
    const [roomSelect, setRoomSelect] = useState<number>(-1);

    const fetchDataGuild = () => {
        guildNa.getAll()
            .then(resp => {
                setListGuild(resp.data.data);
            })
            .catch(err => {
                alert("error retrieve guild")
            })
    }

    const fetchDataRoom = (setState: any, uuid: string) => {
        // find id 
        let tmp = listGuild.find(elem => elem.uuid === uuid)
        if (tmp)
            naRoom.getAll({ GuildId: tmp.id })
                .then(resp => {
                    console.log(resp.data.data);
                    setState(resp.data.data);
                })
                .catch(err => {
                    console.log(err)
                })
    }

    useEffect(() => {
        fetchDataGuild();
    }, []);

    useEffect(() => {
        if (guildSelect !== null) {
            fetchDataRoom(setListRoom, guildSelect);
        }
    }, [guildSelect])


    return (
        <Flex flexDirection={"row"} justifyContent={"flex-start"} height={"100vh"}>
            <NavbarGuild
                listGuild={listGuild}
                setGuildSelect={setGuildSelect}
                guildSelect={guildSelect ?? ""}
            />
            <NavbarRoomList listRoom={listRoom} roomSelect={roomSelect} setRoomSelect={setRoomSelect} />
            {roomSelect > -1 &&
                <RoomView idRoom={listRoom[roomSelect].id} />
            }
        </Flex>
    );
}

export default ChatRoomMain;