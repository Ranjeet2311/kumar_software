import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QureryFormEntry {
  _id: string;
  firstName: string;
  lastName: string;
  contact: number;
  email: string;
  subject: string;
  description: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}

const initialState: { queryList: QureryFormEntry[] } = {
  queryList: [],
};

const querySlice = createSlice({
  name: "query",
  initialState: initialState,

  reducers: {
    setQueries: (state, action: PayloadAction<QureryFormEntry[]>) => {
      state.queryList = action.payload;
    },
  },
});

export const { setQueries } = querySlice.actions;
export default querySlice.reducer;
