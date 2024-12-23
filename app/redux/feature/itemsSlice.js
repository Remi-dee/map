// features/itemsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      item: "Oxygen Concentrator",
      variant: "Blue",
      quantity: 100,
      price: 12,
      deliveryDate: "2023-12-02",
      amount: 1200,
    },
  ],
  note: "",
  awaiting: false,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state) => {
      const newItem = {
        id: Date.now(),
        item: "",
        variant: "",
        quantity: 1,
        price: 0,
        deliveryDate: "",
        amount: 0,
      };
      state.items.push(newItem);
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const { id, field, value } = action.payload;
      state.items = state.items.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
              amount:
                field === "quantity" || field === "price"
                  ? (field === "quantity" ? value : item.quantity) *
                    (field === "price" ? value : item.price)
                  : item.amount,
            }
          : item
      );
    },
    updateNote: (state, action) => {
      state.note = action.payload;
    },
    startAwaiting: (state) => {
      state.awaiting = true;
    },
    stopAwaiting: (state) => {
      state.awaiting = false;
    },
  },
});

export const { addItem, deleteItem, updateItem, updateNote , startAwaiting,
    stopAwaiting,} =
  itemsSlice.actions;
export default itemsSlice.reducer;
