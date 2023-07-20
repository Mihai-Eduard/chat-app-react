import { createSlice } from "@reduxjs/toolkit";

const currentSlice = createSlice({
  name: "current",
  initialState: {
    username: null,
    conversations: null,
    shownConversation: null,
  },
  reducers: {
    setUsername(state, action) {
      state.username = action.payload.username;
    },
    setConversations(state, action) {
      state.conversations = action.payload.conversations;
    },
    setShownConversation(state, action) {
      state.shownConversation = action.payload.shownConversation;
    },
  },
});

export default currentSlice;
export const currentActions = currentSlice.actions;
