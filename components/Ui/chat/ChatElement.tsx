import { RootState } from "@/store/store";
import { useEffect, useMemo, useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Avatar, For, HStack } from "@chakra-ui/react";
import { ShieldUser } from "lucide-react";
import { formatTime } from "@/utils/TimeConverter";
import classes from "./ChatElement.module.scss";

// type Chatlist = {
//   sender: string;
//   message: string;
//   timestamps: string;
// };

export default function ChatElement() {
  const getUserChat = useSelector(
    (state: RootState) => state.chat.chats,
    shallowEqual
  );

  const getUserPosition = useSelector(
    (state: RootState) => state.user.user?.position
  );
  const user = useSelector((state: RootState) => state.user.user);
  const getSelectedChat = useSelector(
    (state: RootState) => state.chat.selectedChat
  );

  const selectedUser = getSelectedChat.map(
    (chat, i) => chat.userName.substring(0, 3).toUpperCase() + ".."
  );

  const chatList = useMemo(() => {
    return getUserPosition === "admin"
      ? getSelectedChat.flatMap((chat) => chat.chatlist)
      : getUserChat.flatMap((chat) => chat.chatlist);
  }, [getSelectedChat, getUserChat, getUserPosition]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatList]);

  return (
    <>
      {chatList && chatList.length > 0 ? (
        chatList.map((chat, i) => {
          const isAdminMessage = chat.sender === "admin";
          const isAdminUser = user?.position === "admin";
          return (
            <div
              key={`${chat.sender}-${chat.timestamps}-${i}`}
              className="row mb-3"
            >
              {/* Admin Message → Left Side */}
              {isAdminMessage && (
                <div className="col-8 d-flex align-items-end">
                  {/* Avatar */}
                  <Avatar.Root
                    className={`${classes.avatar_root} ${classes.admin_bg} me-2`}
                  >
                    <Avatar.Fallback>
                      <ShieldUser size={22} />
                    </Avatar.Fallback>
                  </Avatar.Root>

                  {/* Speech bubble */}
                  <div className={`${classes.bubble} ${classes.adminBubble}`}>
                    <p className="mb-1">{chat.message}</p>
                    <small className={classes.timestamp}>
                      {formatTime(chat.timestamps)}
                    </small>
                  </div>
                </div>
              )}
              {/* User Message → Right Side */}
              {!isAdminMessage && (
                <div className="col-8 offset-4 d-flex justify-content-end align-items-end">
                  {/* Speech bubble */}
                  <div className={`${classes.bubble} ${classes.userBubble}`}>
                    <p className="mb-1">{chat.message}</p>
                    <small className={classes.timestamp}>
                      {formatTime(chat.timestamps)}
                    </small>
                  </div>

                  {/* Avatar */}
                  <Avatar.Root
                    className={`${classes.avatar_root} ${classes.user_bg} ms-2`}
                  >
                    <Avatar.Fallback style={{ fontSize: "8px" }}>
                      {isAdminUser
                        ? selectedUser || "U"
                        : user?.firstName?.substring(0, 5).toUpperCase()}
                    </Avatar.Fallback>
                  </Avatar.Root>
                </div>
              )}
            </div>
          );
        })
      ) : user?.position === "admin" ? (
        <p className="text-muted">Select chat to communicate</p>
      ) : (
        <p className="text-muted">Your chat will appear here</p>
      )}

      <div ref={chatEndRef} />
    </>
  );
}
