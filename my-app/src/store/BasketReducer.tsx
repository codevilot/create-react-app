import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BasketState } from "../type/type";

const initialState: BasketState = {
  basket:
    (
      JSON.parse(localStorage.getItem("basket") || "{}") || {
        basket: {},
        all: 0,
      }
    ).basket || {},
  all:
    (
      JSON.parse(localStorage.getItem("basket") || "{}") || {
        basket: {},
        all: 0,
      }
    ).all || 0,
};
const BasketReducer = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add(state, action: PayloadAction<number>) {
      state.basket[action.payload] = (state.basket[action.payload] || 0) + 1;
      state.all += 1;
      localStorage.setItem("basket", JSON.stringify(state));
    },
    reduce(state, action: PayloadAction<number>) {
      state.basket[action.payload] > 1
        ? (state.basket[action.payload] = state.basket[action.payload] - 1)
        : delete state.basket[action.payload];
      state.all > 1 ? (state.all -= 1) : (state.all = 0);
      localStorage.setItem("basket", JSON.stringify(state));
    },
  },
});

export const { add, reduce } = BasketReducer.actions;
export default BasketReducer.reducer;
