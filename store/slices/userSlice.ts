import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  email: string;
  firstName: string;
  lastName: string;
  position: string;
  userId: string;
};

interface UserState {
  user: User | null;
}

const initialstate: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialstate,

  reducers: {
    setAppUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { setAppUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
