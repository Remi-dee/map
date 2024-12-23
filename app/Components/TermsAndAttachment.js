import React, { useState } from "react";
import ReviewComponent from "./Review";

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

  const handleContinue = () => {
    const termsAndAttachmentData = {
      paymentTerms,
      deliverySchedule,
      shippingMethod,
      leadTime,
      files,
    };
    setTermsAndAttachmentData(termsAndAttachmentData);
    // onContinue(termsAndAttachmentData);
    setCurrentScreen("ReviewComponent");
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
    <div className="p-6 bg-white border rounded-md">
      <h2 className="text-lg font-semibold mb-4">Terms and Attachments</h2>
      <p className="text-gray-600 mb-6">
        Provide detailed information on payment and delivery terms
      </p>

      <div className="grid grid-cols-12 gap-4 mb-4">
        <div className="col-span-6">
          <label className="block font-semibold mb-2">Payment Terms</label>
          <select
            className="w-full p-2 border rounded"
            value={paymentTerms}
            onChange={(e) => setPaymentTerms(e.target.value)}
          >
            <option value="Net 30">Net 30</option>
            <option value="Net 15">Net 15</option>
            <option value="Due on receipt">Due on receipt</option>
          </select>
        </div>

        <div className="col-span-6">
          <label className="block font-semibold mb-2">Delivery Schedule</label>
          <select
            className="w-full p-2 border rounded"
            value={deliverySchedule}
            onChange={(e) => setDeliverySchedule(e.target.value)}
          >
            <option value="Immediate delivery">Immediate delivery</option>
            <option value="Scheduled delivery">Scheduled delivery</option>
          </select>
        </div>

        <div className="col-span-6">
          <label className="block font-semibold mb-2">Shipping Method</label>
          <select
            className="w-full p-2 border rounded"
            value={shippingMethod}
            onChange={(e) => setShippingMethod(e.target.value)}
          >
            <option value="Courier Services">Courier Services</option>
            <option value="Air Freight">Air Freight</option>
            <option value="Sea Freight">Sea Freight</option>
          </select>
        </div>

        <div className="col-span-6">
          <label className="block font-semibold mb-2">Lead Time</label>
          <div className="flex items-center">
            <input
              type="number"
              className="p-2 border rounded w-full mr-2"
              value={leadTime}
              onChange={(e) => setLeadTime(parseInt(e.target.value) || 0)}
            />
            <span>Days</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label className="block font-semibold mb-2">Attachments</label>
        <div className="p-4 border-dashed border-2 border-gray-300 rounded-md text-center">
          <input
            type="file"
            multiple
            className="hidden"
            id="file-upload"
            onChange={handleFileUpload}
          />
          <label htmlFor="file-upload" className="text-blue-500 cursor-pointer">
            Click to upload or drag and drop
          </label>
          <p className="text-gray-500 mt-2">
            SVG, PNG, JPG or GIF (max. 800x400px)
          </p>
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
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
          onClick={onBack}
        >
          Back
        </button>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
            Save as Draft
          </button>
          <button
            className="px-4 py-2 bg-blue-700 text-white rounded"
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
