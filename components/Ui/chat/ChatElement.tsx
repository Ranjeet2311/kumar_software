import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, For, HStack } from "@chakra-ui/react";
import { ShieldUser } from "lucide-react";

export default function ChatElement() {
  const getUserChat = useSelector((state: RootState) => state.chat.chats);
  const getUserPosition = useSelector(
    (state: RootState) => state.user.user?.position
  );
  const getSelectedChat = useSelector(
    (state: RootState) => state.chat.selectedChat
  );

  // console.log(`chat element getUserChat: `, getUserChat);
  // console.log(`chat element getUserPosition: `, getUserPosition);

  const chatList =
    getUserPosition === "admin"
      ? getSelectedChat.flatMap((chat, i) => chat.chatlist)
      : getUserChat.flatMap((chat, i) => chat.chatlist);

  // console.log(`chatList :: `, chatList);

  return (
    <>
      {chatList &&
        chatList.map((chat, i) => {
          return (
            <div className="chat-list col-12" key={chat.timestamps}>
              <div className="col-12 col-md-2 user">
                {/* 🥑 {chat.sender} */}
                <Avatar.Root>
                  <Avatar.Fallback>
                    {chat.sender === "admin" ? (
                      <ShieldUser size={30} />
                    ) : (
                      chat.sender
                    )}
                  </Avatar.Fallback>
                  {/* <Avatar.Image src="https://bit.ly/broken-link" /> */}
                </Avatar.Root>
              </div>
              <div className="col-12 col-md-10">
                <p className="message">{chat.message}</p>
                {chat.timestamps}
              </div>
            </div>
          );
        })}
    </>
  );
}
