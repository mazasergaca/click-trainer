import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { baseApi } from "./base-api";
import userSlice from "./user/user-slice";
import pointReducer from "./points/points-slice";

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    // points: pointReducer,
    user: persistReducer(userPersistConfig, userSlice),
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
