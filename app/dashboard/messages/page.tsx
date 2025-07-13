"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { setUserChat } from "@/store/slices/chatSlice";
import { AppDispatch } from "@/store/store";
import ChatUsers from "@/components/Ui/chatUser/ChatUsers";
import ChatElement from "@/components/Ui/chat/ChatElement";
import ChatForm from "@/components/Ui/forms/ChatForm";

type Chat = {
  sender: string;
  message: string;
  timestamps: string;
};

interface User {
  userId: string;
  userName: string;
  userType: string;
  chatlist: Chat[];
  createdAt: string;
  updatedAt: string;
}

export default function MessagesPage() {
  const [chats, setChats] = useState<User[]>([]);
  const user = useSelector((state: RootState) => state.user.user);
  // const chatList = useSelector((state: RootState) => state.chat.chats);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    async function fetchAllChats() {
      try {
        const response = await fetch("/api/chat/getChat", {
          method: "GET",
        });
        const result = await response.json();

        // console.log(`fetch all chats result : `, result);

        if (!response.ok) {
          throw new Error(
            `Error fetching chats: ${result.message || "Unknown error"}`
          );
        }
        setChats(result.data);

        // console.log(`chat user chat : `, chats);
      } catch (error) {
        console.error(`ChatUser component error  :`, error);
      }
    }

    fetchAllChats();
  }, []);
  useEffect(() => {
    if (chats.length > 0) {
      dispatch(setUserChat(chats));
    }
    // console.log(`chat dispatched`);
  }, [chats, dispatch]);

  return (
    <div className="container">
      <div className="row chat_section">
        {user?.position === "admin" && (
          <div className="col-12 col-lg-4">
            <ChatUsers users={chats} />
          </div>
        )}
        <div className="col-12 col-lg-8">
          <div className="row chatbox-wrap">
            {user?.position === "admin" ? (
              <h4>Admin Chat</h4>
            ) : (
              <h4>Your Chat</h4>
            )}
            <div className="col-12 message_section">
              <ChatElement />
            </div>
            <div className="col-12 message_form">
              <ChatForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
