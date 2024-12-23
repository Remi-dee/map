import React from "react";

const AwaitingQuote = ({ data }) => {
  const {
    title,
    rfqNo,
    requestor,
    status,
    department,
    client,
    expectedDeliveryDate,
    createdDate,
  } = data;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Quote details</h1>
        <span className="text-sm text-gray-500">Created on {createdDate}</span>
      </div>

      {/* Quote Information */}
      <div className="border p-6 rounded-md mb-6">
        <h2 className="text-lg font-medium mb-4">Quote Information</h2>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <p className="text-sm font-medium text-gray-600">Title</p>
            <p>{title}</p>
          </div>
          <div className="col-span-6">
            <p className="text-sm font-medium text-gray-600">RFQ No</p>
            <p>{rfqNo}</p>
          </div>
          <div className="col-span-6">
            <p className="text-sm font-medium text-gray-600">Requestor</p>
            <div className="flex items-center space-x-2">
              <div className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center font-bold text-gray-600">
                {requestor.initials}
              </div>
              <div>
                <p>
                  {requestor.name}{" "}
                  <span className="text-gray-500">• {requestor.position}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <p className="text-sm font-medium text-gray-600">Status</p>
            <span className="bg-yellow-100 text-yellow-600 text-sm px-2 py-1 rounded-md">
              {status}
            </span>
          </div>
          <div className="col-span-6">
            <p className="text-sm font-medium text-gray-600">Department</p>
            <p>{department}</p>
          </div>
        </div>
      </div>

      {/* Client Information */}
      <div className="border p-6 rounded-md">
        <h2 className="text-lg font-medium mb-4">Client</h2>
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-6">
            <p className="font-semibold">{client.name}</p>
            <p className="text-sm text-gray-500">{client.address}</p>
          </div>
          <div className="col-span-6 text-right">
            <p className="text-sm text-gray-500">Expected delivery date</p>
            <p className="font-semibold">{expectedDeliveryDate}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end mt-6 space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm">
          Respond
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md shadow-sm">
          Reject
        </button>
      </div>
    </div>
  );
};

export default AwaitingQuote;
