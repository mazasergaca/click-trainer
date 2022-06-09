import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pinkstorm: {
    price: 20,
  },
  bluestorm: {
    price: 35,
  },
  yellowstorm: {
    price: 40,
  },
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
});

export default shopSlice.reducer;
