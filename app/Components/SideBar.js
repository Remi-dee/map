"use client";
import { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { LiaToggleOnSolid } from "react-icons/lia";

import { PiToggleLeftDuotone } from "react-icons/pi";
import {
  HomeIcon,
  CalendarIcon,
  BellIcon,
  UserIcon,
  CogIcon,
} from "@heroicons/react/outline"; // Use any icons
import { BiUserVoice } from "react-icons/bi";
import DoubleArrow from "@/app/assets/doubleArrowRight.png";
import Image from "next/image";
import User from "@/app/assets/Profile.png";
import Message from "@/app/assets/message.png";
import { PiToggleRightFill } from "react-icons/pi";
import { PiChatsCircle } from "react-icons/pi";
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

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

  const mobileTabs = [
    { name: "Home", icon: <HomeIcon className="h-6 w-6" />, id: "home" },
    {
      name: "Events",
      icon: <CalendarIcon className="h-6 w-6" />,
      id: "events",
    },
    {
      name: "Speakers",
      icon: <BiUserVoice className="h-6 w-6" />,
      id: "speakers",
    },
    {
      name: "Messages",
      icon: <PiChatsCircle className="h-6 w-6" />,
      id: "messages",
    },
    { name: "Profile", icon: <UserIcon className="h-6 w-6" />, id: "profile" },
  ];
  return (
    <>
      <div
        className={`hidden lg:flex  ${
          isCollapsed ? "w-16" : ""
        } h-[100] transition-width dark:bg-[#484554] dark:border-gray-700 duration-300 p-[8px] bg-white border-r border-[#F1F5F9]`}
      >
        {/* Sidebar content */}
        <div
          className={`flex flex-col justify-between ${
            isCollapsed ? "w-14" : "w-[238px]"
          }`}
        >
          <div>
            <ul className="mt-4 ">
              {" "}
              <li className="flex items-center p-4  hover:bg-[#FCF7FF] dark:hover:bg-[#8576FF]">
                <HomeIcon className="h-6 w-6 text-gray-500 dark:text-[#FFFFFF]" />
                {!isCollapsed && (
                  <span className="ml-4 text-[14px] font-normal leading-[20px] text-left dark:text-[#FFFFFF]">
                    Home
                  </span>
                )}
              </li>
              <li className="flex items-center p-4  hover:bg-[#FCF7FF] dark:hover:bg-[#8576FF]">
                <CalendarIcon className="h-6 w-6 text-gray-500 dark:text-[#FFFFFF]" />
                {!isCollapsed && (
                  <span className="ml-4  text-[14px] font-normal leading-[20px] text-left dark:text-[#FFFFFF]">
                    Events
                  </span>
                )}
              </li>
              <li className="flex items-center p-4 hover:bg-[#FCF7FF] dark:hover:bg-[#8576FF] dark:text-[#FFFFFF] ">
                <BiUserVoice className="h-6 w-6 text-gray-500 dark:text-[#FFFFFF]" />
                {!isCollapsed && (
                  <span className="ml-4  text-[14px] font-normal leading-[20px] text-left dark:text-[#FFFFFF]">
                    Speakers
                  </span>
                )}
              </li>
              <li className="flex items-center p-4 hover:bg-[#FCF7FF] dark:hover:bg-[#8576FF]">
                <BellIcon className="h-6 w-6 text-gray-500 dark:text-[#FFFFFF]" />
                {!isCollapsed && (
                  <span className="ml-4 text-[14px] font-normal leading-[20px] text-left dark:text-[#FFFFFF]">
                    Notifications
                  </span>
                )}
              </li>
              <li className="flex items-center p-4 hover:bg-[#FCF7FF] dark:hover:bg-[#8576FF] dark:text-[#FFFFFF]">
                <PiChatsCircle className="h-6 w-6 text-gray-500 dark:text-[#FFFFFF]" />
                {!isCollapsed && (
                  <span className="ml-4 text-[14px] font-normal leading-[20px] text-left">
                    Messages
                  </span>
                )}
              </li>
              <li className="flex items-center p-4 hover:bg-[#FCF7FF] dark:hover:bg-[#8576FF] dark:text-[#FFFFFF]">
                <UserIcon className="h-6 w-6 text-gray-500 dark:text-[#FFFFFF]" />
                {!isCollapsed && (
                  <span className="ml-4  text-[14px] font-normal leading-[20px] text-left">
                    Profile
                  </span>
                )}
              </li>
              <li className="flex items-center p-4 hover:bg-[#FCF7FF] dark:hover:bg-[#8576FF] dark:text-[#FFFFFF]">
                <CogIcon className="h-6 w-6 text-gray-500 dark:text-[#FFFFFF]" />
                {!isCollapsed && (
                  <span className="ml-4  text-[14px] font-normal leading-[20px] text-left">
                    Settings
                  </span>
                )}
              </li>
              <button
                className="p-4 flex items-center hover:bg-[#FCF7FF] dark:hover:bg-[#8576FF] dark:text-[#FFFFFF] w-full"
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
                <label className="flex items-center p-4 hover:bg-[#FCF7FF] dark:hover:bg-[#8576FF] cursor-pointer dark:text-[#FFFFFF]">
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
              <div className="p-4 dark:text-[#FFFFFF] hover:bg-[#FCF7FF] dark:hover:bg-[#8576FF]">
                <div className="flex items-center space-x-2">
                  <Image
                    src={User}
                    alt="User avatar"
                    className={`${
                      isCollapsed ? "w-6 h-6" : "w-8 h-8"
                    }   rounded-full`}
                  />
                  {!isCollapsed && (
                    <div>
                      <span className="text-[12px] font-normal leading-[16px] text-left">
                        Rudra Devi
                      </span>
                      <br />
                      <span className="text-xs text-[12px] font-normal leading-[16px] text-left">
                        rudra.devi@gmail.com
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed inset-x-0 bottom-0 z-50 bg-white dark:bg-[#484554] border-t dark:border-gray-700 shadow-lg p-2 flex justify-around">
        {mobileTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex flex-col items-center space-y-1 ${
              activeTab === tab.id
                ? "text-[#8576FF] dark:text-[#FFFFFF]"
                : "text-gray-500 dark:text-gray-300"
            }`}
          >
            {tab.icon}
            <span className="text-xs font-medium">{tab.name}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
