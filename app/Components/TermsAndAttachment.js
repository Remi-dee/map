import React, { useState } from "react";
import ReviewComponent from "./Review";
import Upload from "@/app/assets/items/cloudUpload.svg";
import Image from "next/image";

const TermsAndAttachments = ({ onBack, onContinue, quoteDetails }) => {
  const [paymentTerms, setPaymentTerms] = useState("Net 30");
  const [termsAndAttachmentData, setTermsAndAttachmentData] = useState({});
  const [deliverySchedule, setDeliverySchedule] =
    useState("Immediate delivery");
  const [shippingMethod, setShippingMethod] = useState("Courier Services");
  const [leadTime, setLeadTime] = useState(10);
  const [files, setFiles] = useState([]);
  const [currentScreen, setCurrentScreen] = useState("TermsAndAttachments");
  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles([...files, ...uploadedFiles]);
  };

  const handleFileRemove = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const [termsData, setTermsData] = useState({
    paymentTerms: "Net 30",
    deliverySchedule: "Immediate delivery",
    shippingMethod: "Courier Services",
    leadTime: 10,
  });

  //   const handleContinue = () => {
  //     const termsAndAttachmentData = {
  //       paymentTerms,
  //       deliverySchedule,
  //       shippingMethod,
  //       leadTime,
  //       files,
  //     };
  //     setTermsAndAttachmentData(termsAndAttachmentData);
  //     // onContinue(termsAndAttachmentData);
  //     setCurrentScreen("ReviewComponent");
  //   };

  const handleContinue = () => {
    onContinue(termsData); // Pass data to parent
  };

  const handleBack = () => {};

  if (currentScreen === "ReviewComponent") {
    console.log("this is quote", quoteDetails, termsAndAttachmentData);
    return (
      <ReviewComponent
        onBack={handleBack}
        termsAndAttachmentData={termsAndAttachmentData}
        quoteDetails={quoteDetails}
      />
    );
  }

  return (
    <div className=" p-6 bg-white border border-[#E4E7EC] rounded-md">
      <h2 className="text-2xl font-bold mb-1">Terms and Attachments</h2>
      <p className="text-xs mb-[32px] font-normal text-[#98A2B3]">
        Provide detailed information on payment and delivery terms
      </p>

      <div className="grid grid-cols-12 gap-4 mb-4">
        <div className="col-span-6">
          <label className="block font-bold text-[#475367] text-sm mb-2">
            Payment Terms
          </label>
          <select
            className="w-full p-2 border text-[#101928] rounded"
            value={paymentTerms}
            // onChange={(e) => setPaymentTerms(e.target.value)}
            onChange={(e) =>
              setTermsData({ ...termsData, paymentTerms: e.target.value })
            }
          >
            <option value="Net 30">Net 30</option>
            <option value="Net 15">Net 15</option>
            <option value="Due on receipt">Due on receipt</option>
          </select>
        </div>

        <div className="col-span-6">
          <label className="block text-[#475367] font-bold text-sm mb-2">
            Delivery Schedule
          </label>
          <select
            className="w-full p-2 border text-[#101928] rounded"
            value={deliverySchedule}
            onChange={(e) => setDeliverySchedule(e.target.value)}
          >
            <option value="Immediate delivery">Immediate delivery</option>
            <option value="Scheduled delivery">Scheduled delivery</option>
          </select>
        </div>

        <div className="col-span-6">
          <label className="block font-bold text-[#475367] text-sm mb-2">
            Shipping Method
          </label>
          <select
            className="w-full p-2 border text-[#101928] rounded"
            value={shippingMethod}
            onChange={(e) => setShippingMethod(e.target.value)}
          >
            <option value="Courier Services">Courier Services</option>
            <option value="Air Freight">Air Freight</option>
            <option value="Sea Freight">Sea Freight</option>
          </select>
        </div>

        <div className="col-span-6 relative">
          <label className="block font-bold text-sm text-[#475367] mb-2">
            Lead Time
          </label>
          <div className="flex items-center w-full">
            <input
              type="number"
              className="w-full p-2 border rounded text-[#101928] "
              value={leadTime}
              onChange={(e) => setLeadTime(parseInt(e.target.value) || 0)}
            />
            <span className="flex absolute right-2 bg-[#F7F9FC] px-2 py-2 text-[#667185] text-xs font-normal rounded-md">
              Days{" "}
              <button className="flex items-center text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label className="block font-bold text-base mb-2">Attachments</label>
        <p className="text-xs mb-[32px] font-normal text-[#98A2B3]">
          Attach all necessary files or documents
        </p>
        <div className="p-4 flex flex-col items-center border-dashed border-[1.5px] border-[#D0D5DD] rounded-md text-center w-[515px] h-[251px]">
          <Image
            src={Upload}
            alt="Delete"
            className="bg-[#F0F2F5] p-2 rounded-full w-9 h-auto  "
          />
          <input
            type="file"
            multiple
            className="hidden"
            id="file-upload"
            onChange={handleFileUpload}
          />
          <label
            htmlFor="file-upload"
            className="text-blue-500 font-normal text-sm cursor-pointer"
          >
            Click to upload{" "}
            <span className="text-[#475367]">or drag and drop</span>
          </label>
          <p className="text-[#98A2B3] font-normal text-xs mt-2">
            SVG, PNG, JPG or GIF (max. 800x400px)
          </p>

          <div className="flex items-center justify-center space-x-2 my-7">
            <div className="h-[1px] bg-[#F0F2F5] w-full">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <span className="text-sm text-gray-500">OR</span>
            <div className="h-[1px] bg-[#F0F2F5] w-full">
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>

          <button>
            <label
              htmlFor="file-upload"
              className="mt-4 px-4 py-2 text-[#175CFF] border border-[#175CFF] rounded cursor-pointer hover:bg-[#175CFF] hover:text-white"
            >
              Browse Files
            </label>
            <input id="file-upload" type="file" className="hidden" />
          </button>
        </div>

        {files.length > 0 && (
          <div className="mt-4">
            <ul className="space-y-2">
              {files.map((file, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-2 border rounded"
                >
                  <span>{file.name}</span>
                  <button
                    className="text-red-500"
                    onClick={() => handleFileRemove(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-between space-x-4">
        <button
          className="border-[#E4E7EC] text-[#475367] border px-4 py-[10px] rounded-[8px]"
          onClick={onBack}
        >
          Cancel
        </button>
        <div className="space-x-4">
          <button className="text-[#175CFF] border-[#175CFF] border px-[52px] py-[10px] rounded-[8px]">
            Save as Draft
          </button>
          <button
            className="bg-[#175CFF] text-white px-[52px] py-[10px] rounded-[8px]"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndAttachments;
