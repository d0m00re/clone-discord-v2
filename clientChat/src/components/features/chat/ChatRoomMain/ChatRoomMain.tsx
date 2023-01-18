import {useState, useEffect} from "react";
import guildNa from "./../../../../service/networkAdapter/chat/guild/guild.na"
import * as guildType from "./../../../../service/networkAdapter/chat/guild/guild.entities";
import styled from "styled-components";
import CardGuild from "./CardGuild/CardGuild";
import Flex from "./../../../atoms/Flex";

const ChatRoomMain = () => {
    const [listGuild, setListGuild] = useState<guildType.IGuildId[]>([]);
    const [guildSelect, setGuildSelect] = useState<string | null>(null);
    const fetchData = () => {
        guildNa.getAll()
        .then(resp => {
            setListGuild(resp.data.data);
        })
        .catch(err => {
            alert("error retrieve guild")
        })
    }

    useEffect(() => {
        fetchData();
    }, [])
    

    return (
        <section>
            <h1> chat room main</h1>
            <Flex flexDirection="column" gap = "32px">
            {
                listGuild.map(elem => <CardGuild
                    key={elem.id}
                    name={elem.title}
                    uuid={elem.uuid}
                    id={elem.id}
                    onClick={() => setGuildSelect(elem.uuid)}
                    isSelect={guildSelect === elem.uuid}
                />)
            }
            </Flex>
        </section>
    );
}

export default ChatRoomMain;