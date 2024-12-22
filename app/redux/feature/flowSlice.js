import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  requestInfo: {
    title: "",
    rfqNo: "",
    requestor: { name: "", position: "" },
    department: "",
    expectedDeliveryDate: "",
  },
  items: [],
  terms: {
    paymentTerms: "Net 30",
    deliverySchedule: "Immediate delivery",
    shippingMethod: "Courier Services",
    leadTime: 10,
    additionalCharges: 0,
  },
};

const flowSlice = createSlice({
  name: "flow",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step = Math.min(state.step + 1, 4); // Max step is 4
    },
    previousStep: (state) => {
      state.step = Math.max(state.step - 1, 1); // Min step is 1
    },
    updateRequestInfo: (state, action) => {
      state.requestInfo = action.payload;
    },
    updateItems: (state, action) => {
      state.items = action.payload;
    },
    updateTerms: (state, action) => {
      state.terms = action.payload;
    },
  },
});

export const {
  nextStep,
  previousStep,
  updateRequestInfo,
  updateItems,
  updateTerms,
} = flowSlice.actions;
export default flowSlice.reducer;
