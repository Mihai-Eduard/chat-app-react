import { configureStore } from "@reduxjs/toolkit";
import currentSlice from "./current-slice";

const store = configureStore({
  reducer: { current: currentSlice.reducer },
});

export default store;
