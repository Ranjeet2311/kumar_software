import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Chat = {
  sender: string;
  message: string;
  timestamps: string;
};

interface userChat {
  userId: string;
  userName: string;
  userType: string;
  chatlist: Chat[];
  createdAt: string;
  updatedAt: string;
}

const initialstate: {
  chats: userChat[];
  chatId: string | null;
  selectedChat: userChat[];
} = {
  chats: [],
  chatId: null,
  selectedChat: [],
};

const chatSlice = createSlice({
  name: "userChat",
  initialState: initialstate,

  reducers: {
    setUserChat: (state, action: PayloadAction<userChat[]>) => {
      // console.log(`action user chat : `, action.payload);

      state.chats = action.payload;
    },

    setChatId: (state, action: PayloadAction<string | null>) => {
      state.chatId = action.payload;

      state.selectedChat = action.payload
        ? state.chats.filter((chat) => chat.userId === action.payload)
        : [];

      console.log(`setChatId state.selectedChat => `, state.selectedChat);
    },

    sendMessage: (
      state,
      action: PayloadAction<{
        userId: string;
        userName: string;
        userType: string;
        newMessage: Chat;
      }>
    ) => {
      console.log("Updating chat state with message:", action.payload);
      if (state.chats.length == 0) {
        console.log("Adding new message to the list");

        state.chats = [
          ...state.chats,

          {
            userId: action.payload.userId,
            userName: action.payload.userName,
            userType: action.payload.userType,
            chatlist: [action.payload.newMessage],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        ];
      } else {
        state.chats = state.chats.map((chat) =>
          action.payload.userId === chat.userId
            ? {
                ...chat,
                chatlist: [...chat.chatlist, action.payload.newMessage],
              }
            : chat
        );
      }
    },
  },
});

export const { setUserChat, setChatId, sendMessage } = chatSlice.actions;
export default chatSlice.reducer;
