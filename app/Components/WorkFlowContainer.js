import React, { useState } from "react";

import RequestForQuote from "./RequestForQuote";
import TermsAndAttachments from "./TermsAndAttachment";
import ReviewComponent from "./Review";

const WorkflowContainer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [requestInfo, setRequestInfo] = useState({});
  const [items, setItems] = useState([]);
  const [terms, setTerms] = useState({});

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

  return (
    <div className="p-6">
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
        />
      )}
    </div>
  );
};

export default WorkflowContainer;
