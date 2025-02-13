import React, { useEffect, useState } from "react";
import { setChatId, setUserChat } from "@/store/slices/chatSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

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

export default function ChatUsers() {
  const dispatch = useDispatch();

  const selectedChat = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.dataset.tabtype);
    console.log(e.currentTarget.value);
    const selectedUserTab = e.currentTarget.dataset.tabtype as string;
    dispatch(setChatId(selectedUserTab));
  };

  const getUser = useSelector((state: RootState) => state.chat.chats);

  console.log(` user list :`, getUser);

  return (
    <ul>
      {getUser.length > 0 ? (
        getUser &&
        getUser.map((chat, i) => (
          <li key={`${chat.userName + chat.updatedAt}`}>
            <button
              onClick={selectedChat}
              data-tabtype={chat.userId}
              className="w-100 mb-2"
              value={chat.userName}
            >
              {chat.userName}
            </button>
          </li>
        ))
      ) : (
        <p>No chats available.</p>
      )}
    </ul>
  );
}
