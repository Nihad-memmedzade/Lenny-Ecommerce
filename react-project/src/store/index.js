import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productReducer from "./reducers/productReducer";
import categoryReducer from "./reducers/categoryReducer";
import authReducer from "./reducers/authReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["products", "category"],
};



const persistedReducers = combineReducers({
  products: productReducer,
  category: categoryReducer,
  auth: authReducer,
  shoppingCart: shoppingCartReducer,
});

const persistedReducer = persistReducer(persistConfig, persistedReducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
