import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (args, thunkAPI) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);


const bookSLice = createSlice({
  name: "book",
  initialState: { book: [], isLoading: false },
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state, action) => {
      state.isLoading = true;
      console.log(action);
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.book = action.payload;
      console.log(action);
    });
    builder.addCase(getBooks.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action);
    });
  },
});

export default bookSLice.reducer;
