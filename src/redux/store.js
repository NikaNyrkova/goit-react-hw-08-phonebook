import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import phonebookReducer from "./phonebook/phonebook-reducer";
import authReducer from "./auth/auth-reducer";
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

const authPersistConfigs = {
  key: "token",
  storage,
  whiteList: ["token"],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
    auth: persistReducer(authPersistConfigs, authReducer),
  },
  middleware,
  devTools: true,
});
const persistor = persistStore(store);
const configs = {
  persistor,
  store,
};

export default configs;
