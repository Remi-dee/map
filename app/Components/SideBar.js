"use client";
import { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Dashboard from "@/app/assets/sidebar/dashboard.svg";
import Procurement from "@/app/assets/sidebar/procurement.svg";
import Calender from "@/app/assets/sidebar/calender.svg";
import Finance from "@/app/assets/sidebar/finance.svg";
import Inventory from "@/app/assets/sidebar/inventory.svg";
import Contract from "@/app/assets/sidebar/contract.svg";
import Support from "@/app/assets/sidebar/support.svg";
import Settings from "@/app/assets/sidebar/settings.svg";
import Person from "@/app/assets/sidebar/person.svg";
import ArrowSide from "@/app/assets/sidebar/arrowSide.svg";

import { HomeIcon, CalendarIcon, UserIcon } from "@heroicons/react/outline"; // Use any icons
import { BiUserVoice } from "react-icons/bi";
import Image from "next/image";
import { PiToggleRightFill } from "react-icons/pi";
import { PiChatsCircle } from "react-icons/pi";
import Logo from "./Logo";
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Persist dark mode preference in local storage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const toggleMobileSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/* Hamburger Icon for mobile */}
      <div className="-mx-5 lg:hidden flex justify-between border-b p-[16px] border-b-[#E2E8F0] items-center ">
        <Image src={Logo} alt="Logo" className="w-[64px] h-8" />

        <button onClick={toggleMobileSidebar} className="">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div
        className={`hidden lg:flex  ${
          isCollapsed ? "w-16 " : "w-[370px] px-[8px]"
        } h-[100] transition-width dark:bg-[#484554] dark:border-gray-700 duration-300   bg-[#F7F9FC] border-r border-[#F1F5F9]`}
      >
        {/* Sidebar content */}
        <div className={`flex flex-col justify-between ${""}`}>
          <div>
            {!isCollapsed && <Logo />}
            <div className="flex flex-col justify-between">
              {" "}
              <ul className="mt-4 ">
                {" "}
                <li className="flex items-center p-4 rounded-md hover:bg-[#E3EAFB] dark:hover:bg-[#8576FF]">
                  <Image
                    src={Dashboard}
                    alt="Dashboard"
                    className="w-5 h-auto  "
                  />
                  {!isCollapsed && (
                    <span className="ml-4 text-[14px] font-normal leading-[20px] text-left dark:text-[#FFFFFF]">
                      Dashboard
                    </span>
                  )}
                </li>
                <li className="flex items-center p-4 rounded-md hover:bg-[#E3EAFB] dark:hover:bg-[#8576FF]">
                  <Image
                    src={Inventory}
                    alt="Dashboard"
                    className="w-5 h-auto  "
                  />
                  {!isCollapsed && (
                    <span className="ml-4  text-[14px] font-normal leading-[20px] text-left dark:text-[#FFFFFF]">
                      Inventory
                    </span>
                  )}
                </li>
                <li className="flex items-center rounded-md p-4 hover:bg-[#E3EAFB] dark:hover:bg-[#8576FF] dark:text-[#FFFFFF] ">
                  <Image
                    src={Procurement}
                    alt="Procurement"
                    className="w-5 h-auto  "
                  />
                  {!isCollapsed && (
                    <span className="ml-4  text-[14px] font-normal leading-[20px] text-left dark:text-[#FFFFFF]">
                      Procurement
                    </span>
                  )}
                </li>
                <li className="flex items-center p-4 rounded-md hover:bg-[#E3EAFB] dark:hover:bg-[#8576FF]">
                  {!isCollapsed && (
                    <span className="ml-[38px] text-[14px] font-normal leading-[20px] text-left dark:text-[#FFFFFF]">
                      Quotes
                    </span>
                  )}
                </li>
                <li className="flex items-center p-4 rounded-md hover:bg-[#E3EAFB] dark:hover:bg-[#8576FF]">
                  {!isCollapsed && (
                    <span className="ml-[38px] text-[14px] font-normal leading-[20px] text-left dark:text-[#FFFFFF]">
                      Orders
                    </span>
                  )}
                </li>
                <li className="flex items-center p-4 rounded-md hover:bg-[#E3EAFB] dark:hover:bg-[#8576FF] dark:text-[#FFFFFF]">
                  <Image src={Finance} alt="Finance" className="w-5 h-auto  " />
                  {!isCollapsed && (
                    <span className="ml-4 text-[14px] font-normal leading-[20px] text-left">
                      Finance
                    </span>
                  )}
                </li>
                <li className="flex items-center p-4 rounded-md hover:bg-[#E3EAFB] dark:hover:bg-[#8576FF] dark:text-[#FFFFFF]">
                  <button className="text-gray-500 hover:text-gray-700">
                    <svg
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.04164 14.2292C4.44717 14.2292 3.96525 13.7473 3.96525 13.1528C3.96525 12.5583 4.44717 12.0764 5.04164 12.0764C5.63611 12.0764 6.11803 12.5583 6.11803 13.1528C6.11803 13.7473 5.63611 14.2292 5.04164 14.2292Z"
                        fill="#667185"
                      />
                      <path
                        d="M8.27081 13.1528C8.27081 13.7473 8.75272 14.2292 9.3472 14.2292C9.94167 14.2292 10.4236 13.7473 10.4236 13.1528C10.4236 12.5583 9.94167 12.0764 9.3472 12.0764C8.75272 12.0764 8.27081 12.5583 8.27081 13.1528Z"
                        fill="#667185"
                      />
                      <path
                        d="M13.6528 14.2292C13.0583 14.2292 12.5764 13.7473 12.5764 13.1528C12.5764 12.5583 13.0583 12.0764 13.6528 12.0764C14.2472 12.0764 14.7291 12.5583 14.7291 13.1528C14.7291 13.7473 14.2472 14.2292 13.6528 14.2292Z"
                        fill="#667185"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.6256 12.5586L17.9544 12.8925C17.957 12.979 17.9583 13.0657 17.9583 13.1528C17.9583 17.9086 14.103 21.7639 9.3472 21.7639C8.63578 21.7639 7.94311 21.6774 7.27974 21.5138L2.65245 20.9354C1.51438 20.7932 0.723462 19.7323 0.912016 18.601L1.19585 16.898L0.98614 15.2202C0.822586 14.5569 0.736084 13.8642 0.736084 13.1528C0.736084 8.397 4.59141 4.54167 9.3472 4.54167C9.46952 4.54167 9.59125 4.54422 9.71233 4.54927C10.5968 2.03739 12.9896 0.236115 15.8055 0.236115C19.3724 0.236115 22.2639 3.12761 22.2639 6.69445C22.2639 7.22128 22.2006 7.73474 22.0807 8.22706L21.9386 9.36324L22.134 10.5355C22.2974 11.5159 21.612 12.4354 20.6256 12.5586ZM15.8055 2.38889C18.1834 2.38889 20.1111 4.31656 20.1111 6.69445C20.1111 7.06477 20.0646 7.42268 19.9776 7.76331L19.9609 7.82886L19.7952 9.1546C19.7742 9.32238 19.7777 9.49232 19.8055 9.65911L19.9414 10.4746L17.6228 10.7645C16.8199 7.97752 14.6474 5.77091 11.8809 4.92047C12.557 3.42715 14.061 2.38889 15.8055 2.38889ZM9.3472 6.69445C5.78036 6.69445 2.88886 9.58594 2.88886 13.1528C2.88886 13.7074 2.95854 14.2443 3.08906 14.7557L3.10579 14.8212L3.33444 16.6504C3.35864 16.844 3.35464 17.0401 3.32257 17.2325L3.05854 18.8167L7.67875 19.3942L7.74431 19.4109C8.2557 19.5414 8.79254 19.6111 9.3472 19.6111C12.914 19.6111 15.8055 16.7196 15.8055 13.1528C15.8055 9.58594 12.914 6.69445 9.3472 6.69445Z"
                        fill="#667185"
                      />
                    </svg>
                  </button>

                  {!isCollapsed && (
                    <div className="flex justify-between items-center rounded-md  w-full">
                      <span className="ml-4  text-[14px] font-normal leading-[20px] text-left">
                        Communication
                      </span>
                      <div className="flex items-center justify-center h-5 w-9  rounded-[15px] bg-[#175CFF]">
                        <span className="text-sm font-semibold text-white">
                          10
                        </span>
                      </div>
                    </div>
                  )}
                </li>
                <li className="flex items-center p-4 hover:bg-[#E3EAFB] rounded-md dark:hover:bg-[#8576FF] dark:text-[#FFFFFF]">
                  <Image
                    src={Calender}
                    alt="Dashboard"
                    className="w-5 h-auto  "
                  />
                  {!isCollapsed && (
                    <div className="flex justify-between items-center  w-full">
                      <span className="ml-4  text-[14px] font-normal leading-[20px] text-left">
                        Calender
                      </span>
                      <div className="flex items-center justify-center h-5 w-9  rounded-[15px] bg-[#175CFF]">
                        <span className="text-sm font-semibold text-white">
                          10
                        </span>
                      </div>
                    </div>
                  )}
                </li>
                <li className="flex items-center p-4 hover:bg-[#E3EAFB] rounded-md dark:hover:bg-[#8576FF] dark:text-[#FFFFFF]">
                  <Image
                    src={Contract}
                    alt="Dashboard"
                    className="w-6 h-auto  "
                  />
                  {!isCollapsed && (
                    <span className="ml-4  text-[14px] font-normal leading-[20px] text-left">
                      Contracts
                    </span>
                  )}
                </li>
              </ul>
              <ul className="mt-[90px] ">
                <li className="flex items-center p-4 hover:bg-[#E3EAFB] rounded-md dark:hover:bg-[#8576FF] dark:text-[#FFFFFF]">
                  <Image
                    src={Support}
                    alt="Dashboard"
                    className="w-5 h-auto  "
                  />
                  {!isCollapsed && (
                    <span className="ml-4  text-[14px] font-normal leading-[20px] text-left">
                      Support
                    </span>
                  )}
                </li>
                <li className="flex items-center p-4 hover:bg-[#E3EAFB] rounded-md dark:hover:bg-[#8576FF] dark:text-[#FFFFFF]">
                  <Image
                    src={Settings}
                    alt="Dashboard"
                    className="w-5 h-auto  "
                  />
                  {!isCollapsed && (
                    <span className="ml-4  text-[14px] font-normal leading-[20px] text-left">
                      Settings
                    </span>
                  )}
                </li>
                <button
                  className="p-4 flex items-center hover:bg-[#E3EAFB] rounded-md dark:hover:bg-[#8576FF] dark:text-[#FFFFFF] w-full"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                >
                  {/* Collapse/Expand icon */}
                  <span
                    className={`${
                      isCollapsed ? "rotate-180" : ""
                    }flex items-center  transition-transform`}
                  >
                    <MdKeyboardDoubleArrowLeft
                      className={` ${
                        isCollapsed && " rotate-180"
                      } h-6 w-6 text-gray-500 dark:text-[#FFFFFF]`}
                    />
                    <span
                      className={`${
                        isCollapsed && "hidden rotate-180"
                      } ml-4 text-[14px] font-normal leading-[20px] text-left`}
                    >
                      Collapse
                    </span>
                  </span>
                </button>
                <div className=" w-full">
                  <label className="flex items-center p-4 hover:bg-[#E3EAFB] rounded-md dark:hover:bg-[#8576FF] cursor-pointer dark:text-[#FFFFFF]">
                    <button onClick={toggleDarkMode} className=" ">
                      {isDarkMode ? (
                        <PiToggleRightFill className="text-[#8576FF]  h-6 w-6 " />
                      ) : (
                        <PiToggleRightFill className="text-[#E2E8F0] rotate-180 h-6 w-6" />
                      )}
                    </button>

                    <span
                      className={`${
                        isCollapsed && "hidden rotate-180"
                      } ml-4 text-[14px] font-normal leading-[20px] text-left`}
                    >
                      Dark mode
                    </span>
                  </label>
                </div>
                <div className="p-4 dark:text-[#FFFFFF] rounded-md  dark:hover:bg-[#8576FF]">
                  <div className="flex items-center space-x-2">
                    <Image
                      src={Person}
                      alt="User picture"
                      className={`${
                        isCollapsed ? "w-6 h-6" : "w-[40px] h-[40px]"
                      }   rounded-full`}
                    />
                    {!isCollapsed && (
                      <div className="flex gap-[55px] items-center">
                        <div>
                          {" "}
                          <span className="text-[12px] text-[#101928] font-bold leading-[16px] text-left">
                            Mark Benson
                          </span>
                          <br />
                          <span className="text-xs text-[12px] font-normal leading-[16px] text-left">
                            markbenson@core.com
                          </span>{" "}
                        </div>
                        <Image
                          src={ArrowSide}
                          alt="Share"
                          className="w-5 h-6"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
