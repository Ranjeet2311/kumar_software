import React from "react";
import ChatForm from "../forms/ChatForm";

export default function Chat() {
  return (
    <>
      <div className="chat-user col-12">
        <div className="col-12 col-md-2 user">🥑 Admin</div>
        <div className="col-12 col-md-10">
          <p className="message">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            voluptates exercitationem ducimus similique adipisci nam eos modi,
            itaque, deleniti qui animi obcaecati vel asperiores alias porro quam
            ullam possimus magnam.
          </p>
        </div>
      </div>
      <div className="chat-user col-12">
        <div className="col-12 col-md-2 user">👤 Alexander</div>
        <div className="col-12 col-md-10">
          <p className="message">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            voluptates exercitationem ducimus similique adipisci nam eos modi,
            itaque, deleniti qui animi obcaecati vel asperiores alias porro quam
            ullam possimus magnam.
          </p>
        </div>
      </div>
      <ChatForm />
    </>
  );
}
