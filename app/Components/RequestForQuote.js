import { useState } from "react";
import AddItemsSection from "./AddItem";
import TermsAndAttachments from "./TermsAndAttachment";

const RequestForQuote = () => {
  const [currentScreen, setCurrentScreen] = useState("RequestForQuote");
  const [quoteDetails, setQuoteDetails] = useState({
    rfqNo: "RFQ-01234",
    title: "Request for Equipments",
    department: "Maternity",
    expectedDeliveryDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuoteDetails({ ...quoteDetails, [name]: value });
  };

  const handleContinue = () => {
    setCurrentScreen("TermsAndAttachments");
  };

  const handleBack = () => {
    setCurrentScreen("RequestForQuote");
  };

  if (currentScreen === "TermsAndAttachments") {
    console.log("this isnquote",quoteDetails)
    return (
      <TermsAndAttachments onBack={handleBack} quoteDetails={quoteDetails} />
    );
  }

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
            value={quoteDetails.rfqNo}
            onChange={handleInputChange}
            className="mt-1 text-[14px] font-normal text-[#98A2B3] bg-[#F0F2F5] px-[12px] py-[10px] border-[#D0D5DD] block w-full rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-[14px] text-[#475367] font-[700px]">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={quoteDetails.title}
            onChange={handleInputChange}
            className="mt-1 text-[14px] font-normal text-[#98A2B3] block w-full bg-[#F0F2F5] px-[12px] py-[10px] border-[#D0D5DD] rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-[14px] text-[#475367] font-[700px]">
            Department
          </label>
          <input
            type="text"
            name="department"
            value={quoteDetails.department}
            onChange={handleInputChange}
            className="mt-1 text-[14px] font-normal text-[#98A2B3] block w-full bg-[#F0F2F5] px-[12px] py-[10px] border-[#D0D5DD] rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-[14px] text-[#475367] font-[700px]">
            Expected Delivery Date
          </label>
          <input
            type="date"
            name="expectedDeliveryDate"
            value={quoteDetails.expectedDeliveryDate}
            onChange={handleInputChange}
            className="mt-1 text-[14px] font-normal text-[#98A2B3] block w-full bg-[#F0F2F5] px-[12px] py-[10px] border-[#D0D5DD] rounded-md shadow-sm"
          />
          <h7 className="text-xs font-[500px] text-[#667185]">
            Calculated based on lead time and issue date
          </h7>
        </div>
      </div>
      <AddItemsSection />
      <div className="flex justify-end mt-6">
        <button className="bg-gray-300 text-black px-4 py-2 rounded-md mr-2">
          Cancel
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2">
          Save as Draft
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default RequestForQuote;
