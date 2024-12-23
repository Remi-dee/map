import React, { useEffect, useState } from "react";
import Building from "@/app/assets/review/building.svg";
import Image from "next/image";
const AwaitingQuote = ({ requestInfo }) => {
  //   const { title, rfqNo, requestor, department, expectedDeliveryDate } = data;
  console.log("our details is", requestInfo);

  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const formatDate = () => {
      const today = new Date();

      // Get day with ordinal suffix
      const day = today.getDate();
      const ordinalSuffix = (n) => {
        if (n > 3 && n < 21) return "th";
        switch (n % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      };
      const formattedDay = `${day}${ordinalSuffix(day)}`;

      // Get weekday, month, and year
      const weekday = today.toLocaleDateString("en-US", { weekday: "short" });
      const month = today.toLocaleDateString("en-US", { month: "long" });
      const year = today.getFullYear();

      // Get time in 12-hour format
      const time = today.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      // Combine all parts
      return `${weekday}, ${formattedDay} ${month} ${year}, ${time}`;
    };

    setCurrentDateTime(formatDate());
  }, []);
  return (
    <div className="p-6 bg-white rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold">Quote details</h1>
          <span className="text-sm text-gray-500">
            Created on {currentDateTime}
          </span>
        </div>
        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="px-4 py-2 bg-[#175CFF] text-white rounded-[8px] shadow-sm">
            Respond
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-[8px] bg-red-600 text-white text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1">
            <span className="font-medium text-sm">X</span> Reject
          </button>
        </div>
      </div>

      {/* Quote Information */}

      <div className="bg-white border  rounded-md px-[32px] py-[24px]">
        <div className="flex justify-between">
          {" "}
          <h2 className="text-lg font-semibold mb-4 ">
            Request Information
          </h2>{" "}
          <div className="col-span-6 text-right">
            <p className="text-sm text-gray-500">Expected delivery date</p>
            <p className="font-semibold">{requestInfo?.expectedDeliveryDate}</p>
          </div>
        </div>{" "}
        <div className="flex-col mb-6">
          <div className="flex justify-between ">
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
              <div className="col-span-6">
                <p className="text-sm font-medium text-gray-600">Status</p>
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
                    <span className="font-medium text-[#101928]">Jane Doe</span>
                    <span className="text-[#D9D9D9] text-[25px]">•</span>
                    <span className="text-sm text-gray-500">
                      Head Nurse, Paediatrics
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <span className="bg-[#FFECE5] text-[#F56630] text-sm px-2 py-1 rounded-[50px]">
                  Awaiting
                </span>
              </div>
              <div className="flex ">
                <p>{requestInfo?.department}</p>
              </div>{" "}
              <div className="flex ">
                <p>{requestInfo?.expectedDeliveryDate}</p>
              </div>
            </div>

            {/* Client Information */}
            <div className="w-[320px] h-[120px] border p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-[10px]">
                {" "}
                <Image
                  src={Building}
                  alt="Client Logo"
                  className="w-5 h-auto"
                />
                <div>
                  <h2 className="text-xs font-normal">Client</h2>
                </div>
              </div>
              <div className="gap-4 items-center">
                <div className="w-full flex gap-3 ">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#FFECE5]">
                    <span className="text-sm font-semibold text-[#101928]">
                      W
                    </span>
                  </div>
                  <div>
                    <p className="w-full text-sm font-[500]">
                      Westend Hospital
                    </p>
                    <p className="w-full text-base font-normal text-[#475367]">
                      Clear street
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwaitingQuote;
