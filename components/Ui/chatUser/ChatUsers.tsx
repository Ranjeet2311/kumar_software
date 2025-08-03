import React, { useEffect, useState } from "react";
import { setChatId } from "@/store/slices/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "@/components/Loader";
import { RootState } from "@/store/store";
import classes from "./ChatUsers.module.scss";

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
  isNew?: boolean;
}

interface ChatProps {
  usersList: User[];
}

export default function ChatUsers({ usersList }: ChatProps) {
  const [users, setUsers] = useState<User[]>(usersList);
  const dispatch = useDispatch();

  const currentUserId = useSelector(
    (state: RootState) => state.user.user?.userId
  );

  useEffect(() => {
    setUsers(usersList);
  }, [usersList]);

  async function handleOpenChat(chatId: string) {
    if (!currentUserId) return;

    try {
      await fetch("/api/chat/lastSeen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: currentUserId, chatId }),
      });

      setUsers((prev) =>
        prev.map((u) => (u.userId === chatId ? { ...u, isNew: false } : u))
      );

      dispatch(setChatId(chatId));
    } catch (error) {
      console.error("Error setting last seen:", error);
    }
  }

  return (
    <ul className={classes.chat_user_list}>
      {users && users.length ? (
        users.map((chat) => (
          <li
            key={chat.userId}
            className={`${classes.chat_user_btn} ${
              chat.isNew ? "newChat" : ""
            }`}
            onClick={() => handleOpenChat(chat.userId)}
          >
            <button data-tabtype={chat.userId} value={chat.userName}>
              {chat.userName}
            </button>
          </li>
        ))
      ) : (
        <p className="d-block mx-auto">
          <Loader size="md" />
        </p>
      )}
    </ul>
  );
}
