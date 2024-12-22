// RequestForQuote.js
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  updateItem,
  updateQuoteDetails,
} from "../redux/feature/quoteSlice";
import { useState } from "react";
import AddItemsSection from "./AddItem";

const RequestForQuote = () => {
  const dispatch = useDispatch();
  const { items, quoteDetails } = useSelector((state) => state.quote);

  const handleAddItem = () => {
    dispatch(addItem());
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  const handleInputChange = (e, index, field) => {
    dispatch(updateItem({ index, field, value: e.target.value }));
  };

  const handleQuoteChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateQuoteDetails({ name, value }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Request for Quote</h1>
      <h5 className="text-xs mb-[32px] font-normal text-[#98A2B3]">
        Fill out these details to send the RFQ
      </h5>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="">
          <label className="block text-[14px] text-[#475367] font-[700px]">
            RFQ No
          </label>
          <input
            type="text"
            name="rfqNo"
            value={quoteDetails.rfqNo || ""}
            onChange={handleQuoteChange}
            className="mt-1 text-[14px] font-normal text-[#98A2B3] bg-[#F0F2F5] px-[12px] py-[10px] border-[#D0D5DD] block w-full  rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-[14px] text-[#475367] font-[700px]">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={quoteDetails.title || ""}
            onChange={handleQuoteChange}
            className="mt-1  text-[14px] font-normal text-[#98A2B3] block w-full bg-[#F0F2F5] px-[12px] py-[10px] border-[#D0D5DD] rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-[14px] text-[#475367] font-[700px]">
            Department
          </label>
          <input
            type="text"
            name="department"
            value={quoteDetails.department || ""}
            onChange={handleQuoteChange}
            className="mt-1  text-[14px] font-normal text-[#98A2B3] block w-full bg-[#F0F2F5] px-[12px] py-[10px] border-[#D0D5DD] rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-[14px] text-[#475367] font-[700px]">
            Expected Delivery Date
          </label>
          <input
            type="date"
            name="expectedDeliveryDate"
            value={quoteDetails.expectedDeliveryDate || ""}
            onChange={handleQuoteChange}
            className="mt-1  text-[14px] font-normal text-[#98A2B3] block w-full bg-[#F0F2F5] px-[12px] py-[10px] border-[#D0D5DD]  rounded-md shadow-sm"
          />
          <h7 className="text-xs font-[500px] text-[#667185]">
            Calculated based on lead time and issue date
          </h7>
        </div>
      </div>
      <AddItemsSection />
      {/* <h2 className="text-lg font-semibold mb-4">Add Items</h2>
      <table className="w-full mb-4 border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Items</th>
            <th className="border p-2">Variant</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Expected Delivery Date</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleInputChange(e, index, "name")}
                  className="w-full border-gray-300 rounded-md shadow-sm"
                />
              </td>
              <td className="border p-2">
                <input
                  type="text"
                  value={item.variant}
                  onChange={(e) => handleInputChange(e, index, "variant")}
                  className="w-full border-gray-300 rounded-md shadow-sm"
                />
              </td>
              <td className="border p-2">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleInputChange(e, index, "quantity")}
                  className="w-full border-gray-300 rounded-md shadow-sm"
                />
              </td>
              <td className="border p-2">
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) => handleInputChange(e, index, "price")}
                  className="w-full border-gray-300 rounded-md shadow-sm"
                />
              </td>
              <td className="border p-2">
                <input
                  type="date"
                  value={item.deliveryDate}
                  onChange={(e) => handleInputChange(e, index, "deliveryDate")}
                  className="w-full border-gray-300 rounded-md shadow-sm"
                />
              </td>
              <td className="border p-2">
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <div className="flex justify-end mt-6">
        <button className="bg-gray-300 text-black px-4 py-2 rounded-md mr-2">
          Cancel
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2">
          Save as Draft
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Continue
        </button>
      </div>
    </div>
  );
};

export default RequestForQuote;
