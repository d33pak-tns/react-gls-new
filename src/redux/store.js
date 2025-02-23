import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage for persistence
import { combineReducers } from "redux";
import userReducer from "./userSlice";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  // Disable serializable check for actions
  whitelist: ["user","currentUser"], // persist only user data
  serialize: false, // Allow non-serializable values (if needed)
};

const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable checks globally (use cautiously)
    }),
});

const persistor = persistStore(store);

export { store, persistor };
