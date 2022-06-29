import { configureStore } from "@reduxjs/toolkit";
import DarkmodeReducer from "./DarkmodeReducer";
import BasketReducer from "./BasketReducer";
const store = configureStore({
  reducer: {
    darkState: DarkmodeReducer,
    basketState: BasketReducer,
  },
});

export default store;
