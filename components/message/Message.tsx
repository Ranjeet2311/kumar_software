import React, { useEffect, useState } from "react";
import ChatForm from "../Ui/forms/ChatForm";
import ChatElement from "../Ui/chat/ChatElement";
import ChatUsers from "../Ui/chatUser/ChatUsers";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { setUserChat } from "@/store/slices/chatSlice";
import { AppDispatch } from "@/store/store";

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

export default function Message() {
  const [chats, setChats] = useState<User[]>([]);
  const user = useSelector((state: RootState) => state.user.user);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    async function fetchAllChats() {
      try {
        const response = await fetch("api/chat/getChat", {
          method: "GET",
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            `Error fetching chats: ${result.message || "Unknown error"}`
          );
        }
        setChats(result.data);

        console.log(`all chat data : `, result.data);
        console.log(`chat user chat : `, chats);
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
    console.log(`chat dispatched`);
  }, [chats, dispatch]);

  return (
    <>
      <div className="row">
        {user?.position === "admin" && (
          <div className="col-12 col-lg-4">
            <ChatUsers />
          </div>
        )}
        <div className="col-12 col-lg-8">
          <div className="chatbox-wrap">
            <ChatElement />
          </div>
          <ChatForm />
        </div>
      </div>
    </>
  );
}
