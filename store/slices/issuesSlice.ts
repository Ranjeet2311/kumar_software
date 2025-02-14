import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Issues {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  issue: string;
  description: string;
  progress: boolean;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

const initialstate: { issuesList: Issues[] } = {
  issuesList: [],
};

const issuesSlice = createSlice({
  name: "issues",
  initialState: initialstate,

  reducers: {
    setIssues: (state, action: PayloadAction<Issues[]>) => {
      state.issuesList = action.payload;
    },
  },
});

export const { setIssues } = issuesSlice.actions;
export default issuesSlice.reducer;
