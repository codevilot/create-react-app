import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
export interface ProductState {
  categories: string[];
}

// type line
const initialState: ProductState = {
  categories: [],
};
export const getAllCategories = createAsyncThunk("categories/get", async () => {
  const categories_list = await fetch(
    "https://fakestoreapi.com/products/categories"
  );
  return categories_list.json();
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getAllCategories.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.categories = action.payload;
      }
    );
  },
});
export default productsSlice.reducer;
