"use client"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quoteDetails: {
    rfqNo: "RFQ-01234",
    title: "Request for Equipments",
    status: "Awaiting",
    department: "Maternity",
  },
  items: [
    { name: "Oxygen Concentrator", quantity: 100, price: 200, total: 20000 },
    // Add more items here
  ],
  currentStep: 1,
};



const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    updateQuoteDetails(state, action) {
      state.quoteDetails = action.payload;
    },
    updateItems(state, action) {
      state.items = action.payload;
    },
    setCurrentStep(state, action) {
      state.currentStep = action.payload;
    },
  },
});

export const { updateQuoteDetails, updateItems, setCurrentStep } =
  quoteSlice.actions;
export default quoteSlice.reducer;

