import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { filterReducer } from "./filtersSlice";
import { contactsReducer } from "./contactsSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const reducer = combineReducers({
  contacts: persistReducer(persistConfig, contactsReducer),
  filter: filterReducer,
});

export const store = configureStore({
  reducer: reducer,
});

export const persistor = persistStore(store);
