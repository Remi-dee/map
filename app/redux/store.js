"use client"

import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./feature/quoteSlice";

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});
