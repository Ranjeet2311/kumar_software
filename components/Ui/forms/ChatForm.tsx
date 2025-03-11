import { RootState } from "@/store/store";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import xss from "xss";

export default function ChatForm() {
  const [chatMessage, setChatMessage] = useState<string>();
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [sending, setSending] = useState<boolean>(false);

  const user = useSelector((state: RootState) => state.user.user);
  const userChatId = useSelector((state: RootState) => state.chat.chatId);

  // console.log(`chat user, userData: `, user);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const XSSProofValue = xss(value);
    setChatMessage(XSSProofValue);
  };

  const handleMessages = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setMessage(null);

    let newMessage;

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
      console.log("Message sent successfully");
      setSending(false);
      setMessage(result.message);
      setError(null);
      // setChatMessage("");
    } else {
      console.error("Error:", result.message);
      setError(result.message);
      setTimeout(() => {
        setSending(false);
      }, 1500);
    }
  };

  return (
    <div>
      <div className="form-wrap">
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
              className="btn btn-bg w-100 text-dark"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
        <p className="bg-primary text-white">{message && message} </p>
        <p className="bg-primary text-white">{error && error} </p>
      </div>
    </div>
  );
}
