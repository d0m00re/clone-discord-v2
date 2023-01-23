import { useState, useEffect } from "react";
import Flex from "./../../../atoms/Flex";
import * as naEntities from "./../../../../service/networkAdapter/chat/room/room.entities";
import styled from "styled-components";

interface INavbarRoomList {
    listRoom : naEntities.IRoomId[]
    roomSelect : number;
    setRoomSelect : React.Dispatch<React.SetStateAction<number>>;
}

interface IRoomItemP {
    isSelect : boolean;
}

const RoomItemP = styled.p<IRoomItemP> `
    color : white;
    cursor : pointer;
    margin : 0;
    padding: 3px;
    border-radius: 8px;
    &:hover {
        background-color: grey;
    }
    ${({ isSelect }) => isSelect && `background-color: grey;`};

`;

const NavbarRoomList = (props: INavbarRoomList) => {
    return (
        <Flex flexDirection="column" gap="5px" padding={"10px"} backgroundColor={"#141111ec"}>
            <h3>General</h3>
            {
                props.listRoom.map((elem, id) => {
                    return (
                        <RoomItemP
                            key={elem.uuid}
                            isSelect={props.roomSelect === id}    
                            onClick={() => props.setRoomSelect(id)}
                        >
                                # {elem.title}
                        </RoomItemP>
                    );
                })
            }
        </Flex>
    )
}

export default NavbarRoomList;