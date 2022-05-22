import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: {
    totalGames: {
      name: "Total games",
      value: 0,
      levels: [
        { value: 1, points: 5, reseived: false },
        { value: 10, points: 15, reseived: false },
        { value: 25, points: 20, reseived: false },
        { value: 50, points: 25, reseived: false },
        { value: 100, points: 50, reseived: false },
        { value: 250, points: 100, reseived: false },
        { value: 1000, points: 250, reseived: false },
      ],
    },
    totalCoins: {
      name: "Total coins",
      value: 0,
      levels: [
        { value: 10, points: 5, reseived: false },
        { value: 100, points: 15, reseived: false },
        { value: 500, points: 20, reseived: false },
        { value: 1000, points: 25, reseived: false },
        { value: 2500, points: 50, reseived: false },
        { value: 5000, points: 100, reseived: false },
        { value: 10000, points: 250, reseived: false },
      ],
    },
    record: {
      name: "Points record",
      value: 0,
      levels: [
        { value: 5, points: 5, reseived: false },
        { value: 15, points: 15, reseived: false },
        { value: 25, points: 20, reseived: false },
        { value: 40, points: 25, reseived: false },
        { value: 70, points: 50, reseived: false },
        { value: 100, points: 100, reseived: false },
        { value: 250, points: 250, reseived: false },
      ],
    },
  },
};

const achievementSlice = createSlice({
  name: "achievement",
  initialState,
  reducers: {
    incrementGames(state) {
      state.type.totalGames.value += 1;
    },
    incrementTotalCoins(state, action) {
      state.type.totalCoins.value += action.payload;
    },
    changeRecord(state, action) {
      state.type.record.value = action.payload;
    },
    changeReseived(state, { payload }) {
      console.log(state.type.totalGames.levels[0].reseived);
      const arrNames = Object.keys(state.type);
      console.log(arrNames);
      state.type[arrNames[payload.indexType]].levels[
        payload.indexLevel
      ].reseived = true;
    },
  },
});

export const {
  incrementTotalCoins,
  incrementGames,
  changeRecord,
  changeReseived,
} = achievementSlice.actions;

export default achievementSlice.reducer;
