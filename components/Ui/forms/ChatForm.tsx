import AlertMessage from "@/components/AlertMessage";
import Loader from "@/components/Loader";
import { sendMessage, setUserChat } from "@/store/slices/chatSlice";
import { AppDispatch, RootState } from "@/store/store";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import xss from "xss";
import { MessageCirclePlus } from "lucide-react";

export default function ChatForm() {
  const [chatMessage, setChatMessage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [sending, setSending] = useState<boolean>(false);

  const user = useSelector((state: RootState) => state.user.user);
  const userChatId = useSelector((state: RootState) => state.chat.chatId);
  // const useChatLIst = useSelector((state: RootState) => state.chat.chats);
  const selectedChat = useSelector(
    (state: RootState) => state.chat.selectedChat
  );
  const selectedUserId = selectedChat.map((chat) => chat.userId);
  console.log(`selectedUserId :: `, selectedUserId);

  // console.log(`chat user, userData: `, user);

  console.log(`User position : `, user?.position);

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const XSSProofValue = xss(value);
    setChatMessage(XSSProofValue);
  };

  const handleMessages = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setMessage(null);

    if (chatMessage?.trim()?.length && user?.userId) {
      console.log(`Dispatching cnew message`);

      const userId =
        user.position === "admin" ? selectedUserId[0] : user?.userId;

      console.log(`sender userId : `, userId);

      dispatch(
        sendMessage({
          userId: userId,
          userName: user?.firstName,
          userType: user?.position,
          newMessage: {
            sender: user?.position,
            message: chatMessage,
            timestamps: new Date().toISOString(),
          },
        })
      );
    }

    let newMessage;

    if (chatMessage?.trim()?.length) {
      if (user?.position === "admin") {
        newMessage = {
          userId: userChatId,
          firstName: user?.firstName,
          lastName: user?.lastName,
          position: user?.position,
          textMessage: chatMessage,
        };
      } else {
        newMessage = {
          userId: user?.userId,
          firstName: user?.firstName,
          lastName: user?.lastName,
          position: user?.position,
          textMessage: chatMessage,
        };
      }

      const response = await fetch("/api/chat/postChat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage),
      });

      const result = await response.json();
      // console.log(`chat response :: `, response);
      // console.log(`chat result :: `, result);

      if (response.ok) {
        // console.log("Message sent successfully");
        setSending(false);
        setMessage(result.message);
        setError(null);
        setChatMessage("");
      } else {
        console.error("Error:", result.message);
        setError(result.message);
        setTimeout(() => {
          setSending(false);
        }, 1500);
      }
    } else {
      setError("Please add your message");
      setSending(false);
    }
  };

  return (
    <div>
      <div className="form-wrap w-100">
        <form onSubmit={handleMessages}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Your message*
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              name="message"
              value={chatMessage}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-0">
            <button
              type="submit"
              className={`btn btn-bg w-100 border-0 d-flex justify-content-center align-items-center  text-white ${
                sending ? "bg-primary" : null
              }`}
              disabled={sending}
            >
              {sending ? (
                <Loader size="lg" message="Sending..." />
              ) : (
                <>
                  <MessageCirclePlus
                    size={20}
                    strokeWidth={1.75}
                    className="me-2 d-inline"
                  />
                  Send
                </>
              )}
            </button>
          </div>
        </form>
        <h5 className="mt-3">
          {message && <AlertMessage status="success" message={message} />}
          {error && <AlertMessage status="error" message={error} />}
        </h5>
      </div>
    </div>
  );
}
