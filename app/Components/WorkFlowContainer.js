import React, { useState } from "react";

import RequestForQuote from "./RequestForQuote";
import TermsAndAttachments from "./TermsAndAttachment";
import ReviewComponent from "./Review";
import Link from "next/link";
import { useSelector } from "react-redux";

const WorkflowContainer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [requestInfo, setRequestInfo] = useState({});
  const [items, setItems] = useState([]);
  const [terms, setTerms] = useState({});

  const awaiting = useSelector((state) => state.items.awaiting);
  const steps = [
    {
      id: 1,
      title: "Request Information",
      subtitle: "Provide details about this RFQ",
    },
    {
      id: 2,
      title: "Terms and Attachments",
      subtitle: "Payment and delivery terms",
    },
    { id: 3, title: "Review", subtitle: "Confirm all information provided" },
  ];

  const handleNext = (data) => {
    if (currentStep === 1) setRequestInfo(data);
    else if (currentStep === 2) setTerms(data);

    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log("Submitting:", { requestInfo, items, terms });
    // Implement submission logic here
  };

  const renderStep = (step) => {
    const isActive = step.id === currentStep;
    const isCompleted = step.id < currentStep;

    // Update dynamic styles based on currentStep
    const circleBgColor = isActive
      ? "bg-[#175CFF] text-white"
      : isCompleted
      ? "bg-[#E7F6EC] text-[#0F973D]"
      : "bg-gray-100 text-gray-500";

    const titleColor = isActive
      ? "text-gray-900"
      : isCompleted
      ? "text-gray-900"
      : "text-gray-500";

    const subtitleColor =
      isActive || isCompleted ? "text-gray-500" : "text-gray-400";

    return (
      <div key={step.id} className="flex items-center space-x-4">
        <div
          className={`w-8 h-8 flex font-bold text-lg items-center justify-center rounded-full ${circleBgColor}`}
        >
          {step.id}
        </div>
        <div>
          <h3 className={`font-semibold ${titleColor}`}>{step.title}</h3>
          <p className={`text-sm ${subtitleColor}`}>{step.subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 space-y-6">
      {!awaiting && (
        <>
          <nav className="flex mb-5 items-center space-x-2 text-sm text-gray-500">
            {/* First breadcrumb item */}
            <Link className="text-blue-500 hover:underline" href="/quotes">
              Quotes
            </Link>

            {/* Separator */}
            <span>/</span>

            {/* Current breadcrumb item */}
            <span className="text-gray-900">Quote Response</span>
          </nav>

          {/* Flow Bar */}
          <div className="bg-white border rounded-lg p-6 flex justify-between">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-1 justify-center ${
                  index !== steps.length - 1 ? " border-gray-200" : ""
                }`}
              >
                {renderStep(step)}
              </div>
            ))}
          </div>
        </>
      )}
      {/* Current Step Content */}
      <div>
        {currentStep === 1 && (
          <RequestForQuote
            onContinue={handleNext}
            initialData={requestInfo}
            items={items}
            setItems={setItems}
          />
        )}
        {currentStep === 2 && (
          <TermsAndAttachments
            onBack={handleBack}
            onContinue={handleNext}
            initialData={terms}
          />
        )}
        {currentStep === 3 && (
          <ReviewComponent
            requestInfo={requestInfo}
            items={items}
            terms={terms}
            onEdit={handleBack}
            onSubmit={handleSubmit}
            awaiting={awaiting}
          />
        )}
      </div>
    </div>
  );
};

export default WorkflowContainer;
