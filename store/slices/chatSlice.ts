import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

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
  },
});

export const { setUserChat, setChatId } = chatSlice.actions;
export default chatSlice.reducer;
