import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pinkPoints: [],
  bluePoints: [],
  yellowPoints: [],
};

const pointsSlice = createSlice({
  name: "points",
  initialState,
  reducers: {
    createPinkPoint(state, action) {
      state.pinkPoints = [...state.pinkPoints, action.payload];
    },
    deletePinkPoint(state, action) {
      state.pinkPoints = state.pinkPoints.filter(
        (point) => point.id !== action.payload
      );
    },
    createBluePoint(state, action) {
      state.bluePoints = [...state.bluePoints, action.payload];
    },
    deleteBluePoint(state, action) {
      state.bluePoints = state.bluePoints.filter(
        (point) => point.id !== action.payload
      );
    },
    createYellowPoint(state, action) {
      state.yellowPoints = [...state.yellowPoints, action.payload];
    },
    deleteYellowPoint(state, action) {
      state.yellowPoints = state.yellowPoints.filter(
        (point) => point.id !== action.payload
      );
    },
    clearAllPoints(state) {
      state.pinkPoints = [];
      state.bluePoints = [];
      state.yellowPoints = [];
    },
  },
});

export const {
  createPinkPoint,
  deletePinkPoint,
  createBluePoint,
  deleteBluePoint,
  createYellowPoint,
  deleteYellowPoint,
  clearAllPoints,
} = pointsSlice.actions;

export default pointsSlice.reducer;
