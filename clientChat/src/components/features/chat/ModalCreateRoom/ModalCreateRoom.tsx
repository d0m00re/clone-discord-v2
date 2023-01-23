import React, { useState } from 'react';
import { Button, Modal } from 'antd';
type Props = {
    onRevStateModal : () => void;
    isModalOpen : boolean;
}

function ModalCreateRoom(props : Props) {
    const handleOk = () => {
      props.onRevStateModal();
    };
  
    const handleCancel = () => {
        props.onRevStateModal();
    };
  
    return (
      <>
        <Modal title="Basic Modal" open={props.isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <h1> create a room</h1>
          <form>
            
          </form>
        </Modal>
      </>
    );
   
}

export default ModalCreateRoom;