import React, { useState } from "react";
import { useSelector } from "react-redux";
import Misc from "@/app/assets/review/misc.svg";
import Sign from "@/app/assets/review/signDoc.svg";
import Edit from "@/app/assets/review/edit.svg";
import Close from "@/app/assets/review/close.svg";
import Alert from "@/app/assets/review/alert.svg";
import Image from "next/image";
import AwaitingQuote from "./AwatingQuote";
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
  const [isAwaiting, setIsAwaiting] = useState(false);
  const handleSubmit = () => {
    setModalState("confirmation");
  };

  const handleConfirm = () => {
    setIsAwaiting(true);
    setModalState("loading");
    setTimeout(() => {
      setModalState("success");
      setTimeout(() => {
        setModalState(null); // Close success modal after a short delay
      }, 3000);
    }, 3000); // Simulating loading for 3 seconds
  };

  return (
    <div className="">
      {/* Request Information Section */}
      {isAwaiting ? (
        <AwaitingQuote data={requestInfo} />
      ) : (
        <div className="bg-white border  rounded-md px-[32px] py-[24px]">
          <div className="flex justify-between">
            {" "}
            <h2 className="text-lg font-semibold mb-4 ">
              Request Information
            </h2>{" "}
            <Image src={Edit} alt="Delete" className="w-[24px] h-auto" />
          </div>{" "}
          <div className="flex-col mb-6">
            <div className="flex  gap-[240px]">
              <div className="space-y-[16px] text-[#555E68] text-base font-[500]">
                <div className="flex">
                  <p className=" ">Title</p>
                </div>
                <div className="flex ">
                  <p className="">RFQ No</p>
                </div>
                <div className="flex ">
                  <p className="">Requestor</p>
                </div>
                <div className="flex ">
                  <p className="">Department</p>
                </div>
                <div className="flex ">
                  <p className="">Expected Delivery Date</p>
                </div>
              </div>

              <div className="space-y-[16px] text-base font-[500]">
                {" "}
                <div className="flex ">
                  <p>{requestInfo?.title}</p>
                </div>
                <div className="flex ">
                  <p>{requestInfo?.rfqNo}</p>
                </div>
                <div className="flex ">
                  <div className="flex items-center space-x-3">
                    {/* Circle with initials */}
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#FFECE5]">
                      <span className="text-sm font-semibold text-[#101928]">
                        JD
                      </span>
                    </div>

                    {/* Name and Role */}
                    <div className="flex items-center space-x-1">
                      <span className="font-medium text-[#101928]">
                        Jane Doe
                      </span>
                      <span className="text-[#D9D9D9] text-[25px]">•</span>
                      <span className="text-sm text-gray-500">
                        Head Nurse, Paediatrics
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex ">
                  <p>{requestInfo?.department}</p>
                </div>
                <div className="flex ">
                  <p>{requestInfo?.expectedDeliveryDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Items Section */}
      <div className="bg-white border rounded-md px-[32px] my-[24px] py-[24px]">
        {" "}
        <h2 className="flex items-center gap-1 text-lg font-semibold mb-4">
          Item(s)
        </h2>
        <table className="w-full mb-6 border border-[#D0D5DD] rounded-lg overflow-hidden">
          <thead className="bg-[#F9FAFB] text-[#344054] font-normal text-xs border-b border-gray-300">
            <tr>
              <th className="py-2 px-4 text-left">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-gray-300 focus:ring-blue-500 text-blue-600"
                />
              </th>
              <th className="py-2 px-4 text-left">Items</th>
              <th className="py-2 px-4 text-left">Variants</th>
              <th className="py-2 px-4 text-left">Quantity</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Amount</th>
              <th className="py-2 px-4 text-left">Expected Delivery Date</th>
            </tr>
          </thead>
          <tbody className="font-medium text-[14px]">
            {items?.map((item, index) => (
              <tr
                key={index}
                className={`border-b border-gray-300 ${
                  index === items.length - 1 ? "last:border-none" : ""
                }`}
              >
                <td className="py-2 px-4 text-left">
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded border-gray-300 focus:ring-blue-500 text-blue-600"
                  />
                </td>
                <td className="flex gap-2 py-2 px-4">
                  <Image src={Misc} alt="Delete" className="w-[40px] h-auto" />
                  <span className="flex flex-col">
                    <span>{item.item}</span>
                    <span className="text-[#475367] text-sm">#28373</span>
                  </span>
                </td>
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
        <div className="mb-6 gap-4 flex justify-end mr-[70px]">
          <div className=" ">
            <div className="flex flex-col gap-4 font-normal text-[#475367] ">
              <span>Sub Total</span>
              <span>Total</span>
            </div>
          </div>
          <div className=" ">
            <div className="flex flex-col  gap-4 font-normal text-[#475367] ">
              <span>${subtotal.toFixed(2)}</span>
              <span>${total?.toFixed(2)}</span>
            </div>
          </div>
        </div>{" "}
      </div>

      {/* Terms and Attachments Section */}
      <div className="bg-white  border p-4 rounded mb-6 ">
        <div className="w-full flex justify-between">
          <div className="flex gap-[16px]  items-start">
            <Image src={Sign} alt="Delete" className="w-[24px] h-auto" />
            <div>
              <h3 className="text-md font-semibold mb-2">
                Terms and Attachments
              </h3>
              <p className="text-sm">Review payment and delivery terms</p>
            </div>
          </div>

          <button className="flex items-center text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Actions Section */}

      <div className="flex justify-end mt-6">
        <button className="border-[#E4E7EC] text-[#475367] border  px-4 py-[10px] rounded-[8px] mr-2">
          Cancel
        </button>
        <button className=" text-[#175CFF] border-[#175CFF] border px-[52px] py-[10px] rounded-[8px] mr-2">
          Save as Draft
        </button>
        <button
          className="bg-[#175CFF] text-white px-[52px] py-[10px] rounded-[8px]"
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-between">
          <div className="bg-white p-6 rounded shadow-md flex items-center">
            <Image src={Alert} alt="Delete" className="w-[24px] h-auto" />
            <span>RFQ ID sent successfully!</span>
          </div>
          <div>
            {" "}
            <button
              onClick={() => {
                setIsAwaiting(true);
              }}
            >
              <Image src={Close} alt="Exit" className="w-[24px] h-auto" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewComponent;
