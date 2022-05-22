import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  coins: 0,
  achievementPoints: {
    all: 1395,
    inStock: 0,
  },
  volume: 0.3,
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
    incrementAchievementPoints(state, action) {
      console.log(action.payload);
      state.achievementPoints.inStock += action.payload;
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
  changeVolume,
  incrementAchievementPoints,
} = infoSlice.actions;

export default infoSlice.reducer;
