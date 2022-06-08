import { createSlice } from "@reduxjs/toolkit";
import { baseApi } from "../base-api";

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
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
        state.user = action.payload;
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
  },
});

export default userSlice.reducer;
