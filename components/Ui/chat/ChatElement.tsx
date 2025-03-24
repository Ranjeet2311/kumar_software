import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, For, HStack } from "@chakra-ui/react";
import { ShieldUser } from "lucide-react";
import Loader from "@/components/Loader";
import { formatTime } from "@/utils/TimeConverter";

export default function ChatElement() {
  const getUserChat = useSelector((state: RootState) => state.chat.chats);
  const getUserPosition = useSelector(
    (state: RootState) => state.user.user?.position
  );
  const user = useSelector((state: RootState) => state.user.user);
  const getSelectedChat = useSelector(
    (state: RootState) => state.chat.selectedChat
  );

  console.log(`chat user : `, user);

  const selectedUser = getSelectedChat.map(
    (chat, i) => chat.userName.substring(0, 2).toUpperCase() + ".."
  );

  const chatList =
    getUserPosition === "admin"
      ? getSelectedChat.flatMap((chat, i) => chat.chatlist)
      : getUserChat.flatMap((chat, i) => chat.chatlist);

  // console.log(`chatList :: `, chatList);

  return (
    <>
      {chatList && chatList.length > 0
        ? chatList.map((chat, i) => {
            return (
              <>
                <div className="chat-list col-12" key={chat.timestamps}>
                  <div className="row px-0 ps-1 user">
                    {/* <div className="px-0"> */}
                    {user?.position === "admin" ? (
                      <Avatar.Root className="avatar-root">
                        <Avatar.Fallback>
                          {chat.sender === "admin" && <ShieldUser size={30} />}
                          {chat.sender === "user" &&
                            selectedUser &&
                            selectedUser}
                        </Avatar.Fallback>
                      </Avatar.Root>
                    ) : (
                      <Avatar.Root>
                        <Avatar.Fallback>
                          {chat.sender === "admin" && <ShieldUser size={30} />}
                          {chat.sender === "user" &&
                            user?.firstName.substring(0, 2).toUpperCase() +
                              ".."}
                        </Avatar.Fallback>
                      </Avatar.Root>
                    )}
                    {/* </div> */}
                    {/* <div className="px-0 ps-2"> */}
                    <p className="message px-0">{chat.message}</p>
                    <p className="time_stamp">{formatTime(chat.timestamps)}</p>
                    {/* </div> */}
                  </div>
                </div>
              </>
            );
          })
        : user?.position === "admin"
        ? "Select chat to communicate"
        : "Your chat will appear hear"}
    </>
  );
}
