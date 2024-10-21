import React from "react";
import ArrowUp from "../assets/arrow_up.png";
import ArrowDown from "../assets/arrow_down.png";
import Information from "../assets/information.png";
import Image from "next/image";

import { RiErrorWarningLine } from "react-icons/ri";
const Header = () => {
  return (
    <div>
      <div className="flex flex-col font-inter">
        <h1 className="text-xl font-normal leading-5 text-left mt-[8px] lg:mt-[40px] dark:text-white">
          Welcome dear user! here's your summary
        </h1>
        <div className="lg:flex   lg:space-x-[12px] mt-[12px] lg:mt-[24px]">
          {" "}
          <div className="flex flex-col space-y-2 mt-[24px]  p-[16px] rounded-[4px] dark:text-white dark:border-[#484554] border-2 w-full lg-w-[260px] dark:bg-[#484554]">
            <div className="flex space-x-[4px] font-inter text-base font-semibold leading-6 text-left items-center mb-3 lg:mb-0 ">
              <h2>Total Events</h2>

              <RiErrorWarningLine className="h-4 w-4 text-gray-500 dark:text-[#FFFFFF]" />
            </div>
            <div className="flex space-x-[8px] items-center dark:bg-[#484554]">
              <p className="font-inter text-lg font-semibold leading-8 text-left">
                {" "}
                100,000
              </p>
              <Image
                aria-hidden
                src={ArrowUp}
                alt="Arrow up"
                width={12}
                height={12}
              />
              <p className="text-xs font-semibold leading-3 text-left text-[#10B981] ">
                +5.0%
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-2 mt-[24px] p-[16px] rounded-[4px]  border-2 w-full lg-w-[260px] dark:text-white dark:border-[#484554] dark:bg-[#484554]">
            <div className="flex space-x-[4px] font-inter text-base font-semibold leading-6 text-left items-center mb-3 lg:mb-0">
              <h2>Active Speakers</h2>
              <RiErrorWarningLine className="h-4 w-4 text-gray-500 dark:text-[#FFFFFF]" />
            </div>
            <div className="flex space-x-[8px] items-center">
              <p className="font-inter text-lg font-semibold leading-8 text-left">
                {" "}
                25
              </p>
              <Image
                aria-hidden
                src={ArrowDown}
                alt="Arrow down"
                width={12}
                height={12}
              />
              <p className="text-xs font-semibold leading-3 text-left text-[#F43F5E] ">
                -5.0%
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-2 mt-[24px] p-[16px] rounded-[4px]  border-2 w-full lg-w-[260px] dark:text-white dark:border-[#484554] dark:bg-[#484554]">
            <div className="flex space-x-[4px] font-inter text-base font-semibold leading-6 text-left items-center mb-3 lg:mb-0">
              <h2>Total Registerations</h2>
              <RiErrorWarningLine className="h-4 w-4 text-gray-500 dark:text-[#FFFFFF]" />
            </div>
            <div className="flex space-x-[8px] items-center">
              <p className="font-inter text-lg font-semibold leading-8 text-left">
                {" "}
                300
              </p>
              <Image
                aria-hidden
                src={ArrowUp}
                alt="Arrow up"
                width={12}
                height={12}
              />
              <p className="text-xs font-semibold leading-3 text-left text-[#10B981] ">
                +5.0%
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-2 mt-[24px] p-[16px] rounded-[4px]  border-2 w-full lg-w-[260px] dark:text-white dark:border-[#484554] dark:bg-[#484554]">
            <div className="flex space-x-[4px] font-inter text-base font-semibold leading-6 text-left items-center mb-3 lg:mb-0">
              <h2>Total Revenue</h2>
              <RiErrorWarningLine className="h-4 w-4 text-gray-500 dark:text-[#FFFFFF]" />
            </div>
            <div className="flex space-x-[8px] items-center">
              <p className="font-inter text-lg font-semibold leading-8 text-left">
                {" "}
                $500,000
              </p>
              <Image
                aria-hidden
                src={ArrowUp}
                alt="Arrow up"
                width={12}
                height={12}
              />
              <p className="text-xs font-semibold leading-3 text-left text-[#10B981] ">
                +5.0%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
