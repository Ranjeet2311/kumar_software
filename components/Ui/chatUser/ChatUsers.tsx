import React, { useEffect, useState } from "react";
import { setChatId } from "@/store/slices/chatSlice";
import { useDispatch } from "react-redux";
import Loader from "@/components/Loader";

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

interface chatProps {
  users: User[];
}

export default function ChatUsers({ users }: chatProps) {
  const dispatch = useDispatch();
  const selectedChat = (e: React.MouseEvent<HTMLElement>) => {
    const selectedUserTab = e.currentTarget.dataset.tabtype ?? "";
    // Use ?? when you only want to check for null or undefined.
    dispatch(setChatId(selectedUserTab));
  };

  return (
    <ul className="chat_user_list">
      {users && users.length ? (
        users.map((chat, i) => (
          <li
            className="chat_user_btn"
            key={`${chat.userName + chat.updatedAt}`}
          >
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
        <p>
          <Loader size="md" />
        </p>
      )}
    </ul>
  );
}
