import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  deleteItem,
  updateItem,
  updateNote,
} from "../redux/feature/itemsSlice";
import Bin from "@/app/assets/items/bin.svg";
import Image from "next/image";

const AddItemsSection = () => {
  const dispatch = useDispatch();
  const { items, note } = useSelector((state) => state.items);

  const handleItemChange = (id, field, value) => {
    console.log("our items is", items);
    dispatch(updateItem({ id, field, value }));
  };

  const subtotal = items.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="p-6 bg-white ">
      <h2 className="text-base font-bold mb-4">Add Items</h2>

      <div className="grid grid-cols-12 text-[#667185] font-[500px]  bg-[#F7F9FC] px-[8px] py-[4px] gap-4 items-center mb-2">
        <div className="col-span-2  text-sm">Items</div>
        <div className="col-span-2  text-sm">Variant</div>
        <div className="col-span-2 text-sm">Quantity</div>
        <div className="col-span-2  text-sm">Price</div>
        <div className="col-span-2  text-sm">Expected delivery date</div>
        <div className="col-span-1  text-sm">Amount</div>
        <div className="col-span-1"></div>
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          className="w-full grid grid-cols-12 gap-4 items-center mb-2"
        >
          <select
            className="col-span-2 p-2 bg-[#F0F2F5] text-[#98A2B3] font-normal text-sm border-[#D0D5DD] border rounded-[6px]"
            value={item.item}
            onChange={(e) => handleItemChange(item.id, "item", e.target.value)}
          >
            <option value="">Select Item</option>
            <option value="Oxygen Concentrator">Oxygen Concentrator</option>
            <option value="Mechanical Ventilator">Mechanical Ventilator</option>
            <option value="Patient Monitor">Patient Monitor</option>
          </select>

          <select
            className="col-span-2 p-2  font-normal text-[#101928] text-sm border-[#D0D5DD] border rounded-[6px]"
            value={item.variant}
            onChange={(e) =>
              handleItemChange(item.id, "variant", e.target.value)
            }
          >
            <option value="">Select Variant</option>
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
          </select>

          <input
            type="number"
            className="col-span-2 p-2 font-normal text-[#101928] text-sm border-[#D0D5DD] border rounded-[6px] appearance-none"
            value={item.quantity}
            onChange={(e) =>
              handleItemChange(
                item.id,
                "quantity",
                parseInt(e.target.value) || 0
              )
            }
          />

          <div className="col-span-2 relative ">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#667185]">
              $
            </span>
            <input
              type="number"
              className="w-full pl-7 p-2 font-normal text-[#101928] text-sm border-[#D0D5DD] border rounded-[6px] appearance-none"
              value={item.price}
              onChange={(e) =>
                handleItemChange(
                  item.id,
                  "price",
                  parseFloat(e.target.value) || 0
                )
              }
            />
          </div>

          <input
            type="date"
            className="col-span-2 p-2 font-normal text-[#101928] text-sm border-[#D0D5DD] border rounded-[6px]"
            value={item.deliveryDate}
            onChange={(e) =>
              handleItemChange(item.id, "deliveryDate", e.target.value)
            }
          />

          <div className="col-span-1 text-[#101928] font-normal text-sm">
            ${item.amount.toFixed(2)}
          </div>

          <button
            className="w-fit flex items-center justify-end text-red-500"
            onClick={() => dispatch(deleteItem(item.id))}
          >
            <Image src={Bin} alt="Delete" className="w-5 h-auto  " />
          </button>
        </div>
      ))}

      <button
        className="mt-4 px-4 py-2 bg-[#175CFF] font-bold text-white rounded"
        onClick={() => dispatch(addItem())}
      >
        Add Item
      </button>

      <div className="mt-6 border-t pt-4 ">
        <div className="flex gap-4 font-normal text-[#475367] justify-end mr-[50px]">
          <span>Sub Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-6 w-[472px]">
        <label className="block font-bold test-[#475367] text-sm mb-2">
          Note
        </label>
        <textarea
          className="w-full text-sm font-normal p-2 border rounded"
          rows="4"
          placeholder="Enter note here"
          value={note}
          onChange={(e) => dispatch(updateNote(e.target.value))}
        ></textarea>
        <div className="text-right text-sm text-gray-500 mt-1">
          {note.length}/200
        </div>
      </div>
    </div>
  );
};

export default AddItemsSection;
