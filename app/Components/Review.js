import React from "react";
import { useSelector } from "react-redux";

const ReviewComponent = ({
  quoteDetails: requestInfo,
  termsAndAttachmentData: terms,
  onEdit,
  onSubmit,
}) => {
  const { items, note } = useSelector((state) => state.items);
  const subtotal = items?.reduce((sum, item) => sum + item.amount, 0);
  const total = subtotal + (terms?.additionalCharges || 0);

  return (
    <div className="p-6 bg-white border rounded-md">
      {/* Request Information Section */}

      <h2 className="text-lg font-semibold mb-4">Request Information</h2>

      <div className="flex-col space-y-5 mb-6">
        <div className="flex gap-6">
          <p className="text-sm font-semibold">Title</p>
          <p>{requestInfo?.title}</p>
        </div>
        <div className="flex gap-6">
          <p className="text-sm font-semibold">RFQ No</p>
          <p>{requestInfo?.rfqNo}</p>
        </div>
        <div className="flex gap-6">
          <p className="text-sm font-semibold">Requestor</p>
          <p>
            {/* {requestInfo?.requestor.name} - {requestInfo?.requestor.position} */}
            Jane-Doe
          </p>
        </div>
        <div className="flex gap-6">
          <p className="text-sm font-semibold">Department</p>
          <p>{requestInfo?.department}</p>
        </div>
        <div className="flex gap-6">
          <p className="text-sm font-semibold">Expected Delivery Date</p>
          <p>{requestInfo?.expectedDeliveryDate}</p>
        </div>
      </div>

      {/* Items Section */}
      <h2 className="text-lg font-semibold mb-4">Item(s)</h2>
      <table className="w-full mb-6 border">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left">Items</th>
            <th className="py-2 px-4 text-left">Variants</th>
            <th className="py-2 px-4 text-left">Quantity</th>
            <th className="py-2 px-4 text-left">Price</th>
            <th className="py-2 px-4 text-left">Amount</th>
            <th className="py-2 px-4 text-left">Expected Delivery Date</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4">{item.name}</td>
              <td className="py-2 px-4">{item.variant}</td>
              <td className="py-2 px-4">{item.quantity}</td>
              <td className="py-2 px-4">${item.price.toFixed(2)}</td>
              <td className="py-2 px-4">${item.amount.toFixed(2)}</td>
              <td className="py-2 px-4">{item.deliveryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total Section */}
      <div className="mb-6">
        <div className="flex justify-between text-lg font-semibold">
          <span>Sub Total</span>
          <span>${subtotal?.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold mt-2">
          <span>Total</span>
          <span>${total?.toFixed(2)}</span>
        </div>
      </div>

      {/* Terms and Attachments Section */}
      <div className="bg-gray-100 p-4 rounded mb-6">
        <h3 className="text-md font-semibold mb-2">Terms and Attachments</h3>
        <p className="text-sm">Review payment and delivery terms</p>
      </div>

      {/* Actions Section */}
      <div className="flex justify-end space-x-4">
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewComponent;
