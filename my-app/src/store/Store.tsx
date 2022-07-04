import { configureStore } from "@reduxjs/toolkit";
import DarkmodeReducer from "./DarkmodeReducer";
import BasketReducer from "./BasketReducer";

import ListReducer from "./ListReducer";
const store = configureStore({
  reducer: {
    darkState: DarkmodeReducer,
    basketState: BasketReducer,
    listState: ListReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export default store;
