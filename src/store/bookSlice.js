import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export  const getBooks = createAsyncThunk("book/getBooks", async (args, thunkAPI) => {
  try {
    const res = await fetch();
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

const bookSLice = createSlice({
  name: "book",
  initialState: { book: null },
  reducers: {},
});

export default bookSLice.reducer;
