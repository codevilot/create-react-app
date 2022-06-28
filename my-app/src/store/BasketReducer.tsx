import { createSlice } from "@reduxjs/toolkit";
import { basketState } from "../type/type";

const initialState: basketState = {
  basketState: JSON.stringify(localStorage.getItem("basketState") || {}),
};
const BasketReducer = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // changeMode: (state) => {
    //   state.darkMode === "dark"
    //     ? (state.darkMode = "light")
    //     : (state.darkMode = "dark");
    //   localStorage.setItem("darkMode", state.darkMode);
    // },
    add: (list, addId) => {
      list = { ...list, addId: list.addId || 0 + 1 };
    },
  },
});

export const { add } = BasketReducer.actions;
export default BasketReducer.reducer;
