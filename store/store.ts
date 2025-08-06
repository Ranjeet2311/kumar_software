import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import chatReducer from "./slices/chatSlice";
import issuesReducer from "./slices/issuesSlice";
import queryReducer from "./slices/querySlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      chat: chatReducer,
      issues: issuesReducer,
      query: queryReducer,
    },
  });
};

export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];
