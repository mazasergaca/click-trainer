import { createSlice } from "@reduxjs/toolkit";
import { baseApi } from "../base-api";

const initialState = {
  username: null,
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  volume: 0.3,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetToken(state) {
      state.token = null;
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
      baseApi.endpoints.registration.matchFulfilled,
      (state, action) => {
        // state.user = action.payload.user;
        // state.token = action.payload.token;
        // state.isLoggedIn = true;
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
      }
    );
    builder.addMatcher(
      baseApi.endpoints.fetchCurrentUser.matchRejected,
      (state) => {
        state.isFetchingCurrentUser = false;
      }
    );
    builder.addMatcher(
      baseApi.endpoints.getCurrentUser.matchPending,
      (state) => {
        state.isFetchingCurrentUser = true;
      }
    );
    builder.addMatcher(
      baseApi.endpoints.getCurrentUser.matchFulfilled,
      (state) => {
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      }
    );
    builder.addMatcher(
      baseApi.endpoints.getCurrentUser.matchRejected,
      (state) => {
        state.isFetchingCurrentUser = false;
      }
    );
  },
});

export const { resetToken, changeVolume } = userSlice.actions;

export default userSlice.reducer;
