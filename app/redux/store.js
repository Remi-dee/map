"use client";

import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./feature/quoteSlice";
import itemsReducer from "./feature/itemsSlice";

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
    items: itemsReducer,
  },
});
