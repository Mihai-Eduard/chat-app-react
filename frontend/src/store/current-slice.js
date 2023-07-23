import { createSlice } from "@reduxjs/toolkit";

const currentSlice = createSlice({
  name: "current",
  initialState: {
    user: {
      username: null,
      picture: null,
      id: null,
    },
    conversations: null,
    shownConversation: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
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
