import React, {useState, useEffect} from 'react'
import naRoomItem from "./../../../../../service/networkAdapter/chat/roomItem/roomItem.na";
import * as naRoomItemEntities from "./../../../../../service/networkAdapter/chat/roomItem/roomItem.entities";
type Props = {
    idRoom : number;
}

const fetchData = (idRoom : number, setData : any) => {
  naRoomItem.getAll(idRoom)
  .then(resp => {
    setData(resp.data.data);
  })
  .catch(err => {

  })
}

function RoomView(props: Props) {
  const [listMsg, setListMsg] = useState<naRoomItemEntities.IRoomItemId[]>([]);
  const [msg, setMsg] = useState("");
  
  useEffect(() => {
    fetchData(props.idRoom, setListMsg);
  }, []);

  const addMessage = (props : naRoomItemEntities.IRoomItem) => {
    naRoomItem.createOne({
      RoomId: props.RoomId,
      contentType: 'msg',
      content: props.content
    })
    .then(resp => {
      console.log([...listMsg, resp.data.data]);
      setListMsg([...listMsg, resp.data.data]);
    })
    .catch(err => {})
  }
  
  return (
    <section>
      RoomView : {props.idRoom}
      {
        listMsg.map(elem => <p key={elem.id}>{elem.content}</p>)
      }
      <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)}/>
      <button onClick={() => 
      // @ts-ignore
      addMessage({
        RoomId: props.idRoom,
        contentType: 'msg',
        content: msg
      })}>valider</button>
    </section>
  )
}

export default RoomView