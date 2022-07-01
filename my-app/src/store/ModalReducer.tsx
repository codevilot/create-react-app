import { createSlice } from "@reduxjs/toolkit";

const initialState: { modalMode: boolean } = {
    modalMode: false
};

const ModalReducer = createSlice({
    name: "modal",
    initialState,
    reducers: {
        ModalMode: (state) => {
            state.modalMode = !state.modalMode
        },
    },
});

export const { ModalMode } = ModalReducer.actions;
export default ModalReducer.reducer;
