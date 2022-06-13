import { createSlice } from "@reduxjs/toolkit";
import { baseApi } from "../base-api";

const initialState = {
  username: null,
  token: null,
  achievementPoints: {
    all: 0,
  },
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  volume: 0.3,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.username = null;
      state.token = null;
      state.achievementPoints = {
        all: 0,
      };
      state.isLoggedIn = false;
      state.isFetchingCurrentUser = false;
    },
    changeVolume(state, action) {
      state.volume = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      baseApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.token = action.payload.token;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      baseApi.endpoints.fetchCurrentUser.matchPending,
      (state) => {
        state.isFetchingCurrentUser = true;
      }
    );
    builder.addMatcher(
      baseApi.endpoints.fetchCurrentUser.matchFulfilled,
      (state, action) => {
        state.username = action.payload.username;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
        state.achievementPoints.all = Object.values(
          action.payload.achievements
        ).reduce((acc, item) => {
          let allPoint = 0;
          for (const level of item.levels) {
            allPoint += level.points;
          }
          return (acc += allPoint);
        }, 0);
      }
    );
    builder.addMatcher(
      baseApi.endpoints.fetchCurrentUser.matchRejected,
      (state) => {
        state.isFetchingCurrentUser = false;
      }
    );
  },
});

export const { logout, changeVolume } = userSlice.actions;

export default userSlice.reducer;
