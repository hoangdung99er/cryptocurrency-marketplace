import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const crypto = createSlice({
  name: "crypto-currencies",
  initialState: initialState,
  reducers: {},
});

export default crypto.reducer;
