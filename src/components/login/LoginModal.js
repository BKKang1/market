import { Button, Modal } from "antd";
import React, { useState } from "react";
import Login from "./Login";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/userState";
import { useNavigate } from "react-router-dom";
const LoginModal = () => {
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate;
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const style = { display: "none" };
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 1000);
    navigate("/")
  };


  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={()=>{(user===null)? showModal():setUser(null)}}>
        {(user===null)?"로그인":`${user.userName}님 로그아웃`}
      </Button>
      <Modal
        title="로그인"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Login  onCancel={handleCancel} ></Login>
      </Modal>
    </>
  );
};

export default LoginModal;