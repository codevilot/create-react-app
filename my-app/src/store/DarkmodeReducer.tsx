import { createSlice } from "@reduxjs/toolkit";
import { DarkMode } from "../type/type";

const initialState: DarkMode = {
  darkMode: localStorage.getItem("darkMode") || "dark",
};

const DarkmodeReducer = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.darkMode === "dark"
        ? (state.darkMode = "light")
        : (state.darkMode = "dark");
      localStorage.setItem("darkMode", state.darkMode);
    },
  },
});

export const { changeMode } = DarkmodeReducer.actions;
export default DarkmodeReducer.reducer;
