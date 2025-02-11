import React, { useEffect, useState } from "react";

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

export default function ChatUser() {
  const [chats, setChats] = useState<User[]>([]);

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
      } catch (error) {
        console.error(`ChatUser component error  :`, error);
      }
    }

    fetchAllChats();
  }, []);

  return (
    <ul>
      {chats.length > 0 ? (
        chats &&
        chats.map((chat, i) => (
          <li key={`${chat.userName + chat.updatedAt}`}> {chat.userName} </li>
        ))
      ) : (
        <p>No chats available.</p>
      )}
    </ul>
  );
}
