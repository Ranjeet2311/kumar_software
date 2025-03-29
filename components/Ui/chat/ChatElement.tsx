import { RootState } from "@/store/store";
import { useEffect, useMemo, useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Avatar, For, HStack } from "@chakra-ui/react";
import { ShieldUser } from "lucide-react";
import Loader from "@/components/Loader";
import { formatTime } from "@/utils/TimeConverter";

type Chatlist = {
  sender: string;
  message: string;
  timestamps: string;
};

export default function ChatElement() {
  const [chatlist, setChatlist] = useState<Chatlist[] | null>();

  const getUserChat = useSelector(
    (state: RootState) => state.chat.chats,
    shallowEqual
  );
  // console.log(`messages by user : `, getUserChat);

  const getUserPosition = useSelector(
    (state: RootState) => state.user.user?.position
  );
  const user = useSelector((state: RootState) => state.user.user);
  const getSelectedChat = useSelector(
    (state: RootState) => state.chat.selectedChat
  );

  const selectedUser = getSelectedChat.map(
    (chat, i) => chat.userName.substring(0, 2).toUpperCase() + ".."
  );

  const chatList = useMemo(() => {
    return getUserPosition === "admin"
      ? getSelectedChat.flatMap((chat) => chat.chatlist)
      : getUserChat.flatMap((chat) => chat.chatlist);
  }, [getSelectedChat, getUserChat, getUserPosition]);
  // using to prevent unnecessary re-computation

  // console.log(`chatList :: `, chatList);

  // Create a ref for the last chat message
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom when chatList updates
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatList]); // Runs whenever chatList updates

  return (
    <>
      {chatList && chatList.length > 0
        ? chatList.map((chat, i) => {
            return (
              <div
                className="chat-list col-12"
                key={`${chat.sender}-${chat.timestamps}-${i}`}
              >
                <div className="row px-0 ps-1 user">
                  {/* <div className="px-0"> */}
                  {user?.position === "admin" ? (
                    <Avatar.Root className="avatar-root">
                      <Avatar.Fallback>
                        {chat.sender === "admin" && <ShieldUser size={30} />}
                        {chat.sender === "user" && selectedUser && selectedUser}
                      </Avatar.Fallback>
                    </Avatar.Root>
                  ) : (
                    <Avatar.Root>
                      <Avatar.Fallback>
                        {chat.sender === "admin" && <ShieldUser size={30} />}
                        {chat.sender === "user" &&
                          user?.firstName.substring(0, 2).toUpperCase()}
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
            );
          })
        : user?.position === "admin"
        ? "Select chat to communicate"
        : "Your chat will appear hear"}

      <div ref={chatEndRef} />
    </>
  );
}
