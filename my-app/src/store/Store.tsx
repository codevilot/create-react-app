import { configureStore } from "@reduxjs/toolkit";
import DarkmodeReducer from "./DarkmodeReducer";

const store = configureStore({
  reducer: {
    globalState: DarkmodeReducer,
  },
});

export default store;
