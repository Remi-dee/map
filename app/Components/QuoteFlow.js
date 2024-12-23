import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  saveDraft,
  submitQuote,
} from "../redux/feature/quoteSlice";

const QuoteFlow = () => {
  const [currentStep, setCurrentStep] = useState("quoteDetails"); // Tracks the current screen
  const quoteDetails = useSelector((state) => state.quote.details);
  const dispatch = useDispatch();

  const handleSaveDraft = () => {
    dispatch(saveDraft());
    alert("Draft saved successfully!");
  };

  const handleSubmit = () => {
    dispatch(submitQuote());
    setCurrentStep("confirmation");
  };

  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <div className="w-3/4 p-6">
        {currentStep === "quoteDetails" && (
          <QuoteDetails
            onRespond={() => setCurrentStep("respondToQuote")}
            quoteDetails={quoteDetails}
          />
        )}

        {currentStep === "respondToQuote" && (
          <RespondToQuote
            onContinue={() => setCurrentStep("termsAndAttachments")}
            onSaveDraft={handleSaveDraft}
          />
        )}

        {currentStep === "termsAndAttachments" && (
          <TermsAndAttachments
            onContinue={() => setCurrentStep("review")}
            onSaveDraft={handleSaveDraft}
          />
        )}

        {currentStep === "review" && (
          <Review
            onSubmit={handleSubmit}
            onBack={() => setCurrentStep("termsAndAttachments")}
          />
        )}

        {currentStep === "confirmation" && <Confirmation />}
      </div>
    </div>
  );
};

const QuoteDetails = ({ onRespond, quoteDetails }) => (
  <div>
    <h2 className="text-2xl font-bold">Quote Details</h2>
    <div className="mt-4">
      <p>Title: {quoteDetails?.title}</p>
      <p>Requestor: {quoteDetails?.requestor}</p>
      <p>Status: {quoteDetails?.status}</p>
    </div>
    <button
      className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
      onClick={onRespond}
    >
      Respond to Quote
    </button>
  </div>
);

const RespondToQuote = ({ onContinue, onSaveDraft }) => (
  <div>
    <h2 className="text-2xl font-bold">Respond to Quote</h2>
    <form className="mt-4 space-y-4">
      <input type="text" placeholder="RFQ No" className="border p-2 w-full" />
      <input type="text" placeholder="Title" className="border p-2 w-full" />
      <div className="flex space-x-4">
        <input
          type="number"
          placeholder="Quantity"
          className="border p-2 flex-1"
        />
        <input type="text" placeholder="Price" className="border p-2 flex-1" />
      </div>
      <textarea placeholder="Notes" className="border p-2 w-full" />
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="bg-gray-600 text-white px-4 py-2 rounded"
          onClick={onSaveDraft}
        >
          Save as Draft
        </button>
        <button
          type="button"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </form>
  </div>
);

const TermsAndAttachments = ({ onContinue, onSaveDraft }) => (
  <div>
    <h2 className="text-2xl font-bold">Terms and Attachments</h2>
    <form className="mt-4 space-y-4">
      <select className="border p-2 w-full">
        <option>Net 30</option>
        <option>Net 60</option>
      </select>
      <input type="file" className="border p-2 w-full" />
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="bg-gray-600 text-white px-4 py-2 rounded"
          onClick={onSaveDraft}
        >
          Save as Draft
        </button>
        <button
          type="button"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </form>
  </div>
);

const Review = ({ onSubmit, onBack }) => (
  <div>
    <h2 className="text-2xl font-bold">Review</h2>
    <p>Review all details before submitting.</p>
    <div className="flex justify-end space-x-4">
      <button
        type="button"
        className="bg-gray-600 text-white px-4 py-2 rounded"
        onClick={onBack}
      >
        Back
      </button>
      <button
        type="button"
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  </div>
);

const Confirmation = () => (
  <div>
    <h2 className="text-2xl font-bold">Confirmation</h2>
    <p>Your quote has been submitted successfully!</p>
  </div>
);

export default QuoteFlow;
