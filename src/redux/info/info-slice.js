import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  coins: 0,
  bestResult: 0,
  volume: 1,
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    rename(state, action) {
      state.name = action.payload;
    },
    incrementCoins(state, action) {
      state.coins += action.payload;
    },
    decrementCoins(state, action) {
      state.coins -= action.payload;
    },
    changeBestResult(state, action) {
      state.bestResult = action.payload;
    },
    changeVolume(state, action) {
      state.volume = action.payload;
    },
  },
});

export const {
  rename,
  incrementCoins,
  decrementCoins,
  changeBestResult,
  changeVolume,
} = infoSlice.actions;

export default infoSlice.reducer;
