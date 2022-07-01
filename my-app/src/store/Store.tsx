import { configureStore } from "@reduxjs/toolkit";
import DarkmodeReducer from "./DarkmodeReducer";
import BasketReducer from "./BasketReducer";
import ModalReducer from "./ModalReducer";
const store = configureStore({
  reducer: {
    darkState: DarkmodeReducer,
    basketState: BasketReducer,
    modalState: ModalReducer
  },
});

export default store;
