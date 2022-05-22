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
import pointReducer from "./points/points-slice";
import shopReducer from "./shop/shop-slice";
import infoReducer from "./info/info-slice";
import achievementReducer from "./achievement/achievement-slice";

const shopPersistConfig = {
  key: "shop",
  storage,
};
const infoPersistConfig = {
  key: "info",
  storage,
};
const achievementPersistConfig = {
  key: "achievement",
  storage,
};

export const store = configureStore({
  reducer: {
    points: pointReducer,
    shop: persistReducer(shopPersistConfig, shopReducer),
    info: persistReducer(infoPersistConfig, infoReducer),
    achievement: persistReducer(achievementPersistConfig, achievementReducer),
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
