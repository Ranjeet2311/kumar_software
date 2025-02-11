import React from "react";
import ChatForm from "../Ui/forms/ChatForm";
import Chat from "../Ui/chat/ChatElement";
import ChatUser from "../Ui/chatUser/ChatUser";

export default function Message() {
  return (
    <>
      <div className="row">
        <div className="col-12 col-lg-4">
          <ChatUser />
        </div>
        <div className="col-12 col-lg-8">
          <Chat />
          <ChatForm />
        </div>
      </div>
    </>
  );
}
