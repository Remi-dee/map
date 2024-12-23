import React, { useState } from "react";
import { useSelector } from "react-redux";

const ReviewComponent = ({
  quoteDetails: requestInfo,
  termsAndAttachmentData: terms,
  onEdit,
}) => {
  const { items, note } = useSelector((state) => state.items);
  const subtotal = items?.reduce((sum, item) => sum + item.amount, 0);
  const total = subtotal + (terms?.additionalCharges || 0);

  // Modal state
  const [modalState, setModalState] = useState(null); // 'confirmation', 'loading', 'success'

  const handleSubmit = () => {
    setModalState("confirmation");
  };

  const handleConfirm = () => {
    setModalState("loading");
    setTimeout(() => {
      setModalState("success");
      setTimeout(() => {
        setModalState(null); // Close success modal after a short delay
      }, 2000);
    }, 3000); // Simulating loading for 3 seconds
  };

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
          <p>Jane-Doe</p>
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
              <td className="py-2 px-4">{item.item}</td>
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
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      {/* Modals */}
      {modalState === "confirmation" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h2 className="text-lg font-semibold mb-4">Confirmation</h2>
            <p className="text-sm mb-6">
              You are about to submit this quote in response to RFQ ID. This
              will immediately be sent to the client “Westend Clear Hospital.”
              Are you sure you want to proceed?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
                onClick={() => setModalState(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleConfirm}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {modalState === "loading" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md flex items-center">
            <div className="animate-spin h-6 w-6 border-4 border-blue-500 border-t-transparent rounded-full mr-4"></div>
            <span>Sending Quote...</span>
          </div>
        </div>
      )}

      {modalState === "success" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md flex items-center">
            <span className="text-green-500 mr-4">✔</span>
            <span>RFQ ID sent successfully!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewComponent;
