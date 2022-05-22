import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pinkstorm: {
    amount: 0,
    price: 20,
  },
  bluestorm: {
    amount: 0,
    price: 35,
  },
  yellowstorm: {
    amount: 0,
    price: 40,
  },
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addPinkstorm(state) {
      state.pinkstorm.amount += 1;
    },
    deletePinkstorm(state) {
      state.pinkstorm.amount -= 1;
    },
    addBluestorm(state) {
      state.bluestorm.amount += 1;
    },
    deleteBluestorm(state) {
      state.bluestorm.amount -= 1;
    },
    addYellowstorm(state) {
      state.yellowstorm.amount += 1;
    },
    deleteYellowstorm(state) {
      state.yellowstorm.amount -= 1;
    },
  },
});

export const {
  addPinkstorm,
  deletePinkstorm,
  addBluestorm,
  deleteBluestorm,
  addYellowstorm,
  deleteYellowstorm,
} = shopSlice.actions;

export default shopSlice.reducer;
