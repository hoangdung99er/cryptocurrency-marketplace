import { configureStore } from "@reduxjs/toolkit";
import CryptoReducer from "./Reducers/CryptoReducer";
import { cryptoApi } from "./Utils/CallApi";
import { cryptoNewsApi } from "./Utils/CryptoNews";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
