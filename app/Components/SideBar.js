"use client";
import { useState, useEffect } from "react";
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
import { PiChatsCircle } from "react-icons/pi";
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
  return (
    <div
      className={`hidden lg:flex  ${
        isCollapsed ? "w-16" : ""
      } h-screen transition-width dark:bg-gray-800 dark:border-gray-700 duration-300 p-[8px] bg-white border-r border-[#F1F5F9]`}
    >
      {/* Sidebar content */}
      <div
        className={`flex flex-col justify-between ${
          isCollapsed ? "w-16" : "w-[238px]"
        }`}
      >
        <div>
          <ul className="mt-4 ">
            {" "}
            <li className="flex items-center p-4  hover:bg-gray-200 dark:hover:bg-gray-600">
              <HomeIcon className="h-6 w-6 text-gray-500 dark:text-gray-300" />
              {!isCollapsed && (
                <span className="ml-4 text-[14px] font-normal leading-[20px] text-left dark:text-gray-300">
                  Home
                </span>
              )}
            </li>
            <li className="flex items-center p-4 hover:bg-gray-200">
              <CalendarIcon className="h-6 w-6 text-gray-500" />
              {!isCollapsed && (
                <span className="ml-4  text-[14px] font-normal leading-[20px] text-left">
                  Events
                </span>
              )}
            </li>
            <li className="flex items-center p-4 hover:bg-gray-200">
              <BiUserVoice className="h-6 w-6 text-gray-500" />
              {!isCollapsed && (
                <span className="ml-4  text-[14px] font-normal leading-[20px] text-left">
                  Events
                </span>
              )}
            </li>
            <li className="flex items-center p-4 hover:bg-gray-200">
              <BellIcon className="h-6 w-6 text-gray-500" />
              {!isCollapsed && (
                <span className="ml-4 text-[14px] font-normal leading-[20px] text-left">
                  Notifications
                </span>
              )}
            </li>
            <li className="flex items-center p-4 hover:bg-gray-200">
              <PiChatsCircle className="h-6 w-6 text-gray-500" />
              {!isCollapsed && (
                <span className="ml-4 text-[14px] font-normal leading-[20px] text-left">
                  Messages
                </span>
              )}
            </li>
            <li className="flex items-center p-4 hover:bg-gray-200">
              <UserIcon className="h-6 w-6 text-gray-500" />
              {!isCollapsed && (
                <span className="ml-4  text-[14px] font-normal leading-[20px] text-left">
                  Profile
                </span>
              )}
            </li>
            <li className="flex items-center p-4 hover:bg-gray-200">
              <CogIcon className="h-6 w-6 text-gray-500" />
              {!isCollapsed && (
                <span className="ml-4  text-[14px] font-normal leading-[20px] text-left">
                  Settings
                </span>
              )}
            </li>
            <button
              className="p-4 flex items-center"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {/* Collapse/Expand icon */}
              <span
                className={`${
                  isCollapsed ? "rotate-180" : ""
                }flex items-center ml-1.5 transition-transform`}
              >
                <Image
                  src={DoubleArrow}
                  width={13}
                  height={13}
                  className={`rotate-180 ${isCollapsed && " rotate-180"} `}
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
            <div className="p-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  className="toggle-checkbox h-5 w-10 rounded-full bg-gray-300 dark:bg-gray-700 appearance-none cursor-pointer"
                />

                <span className="toggle-thumb block w-4 h-4 bg-white dark:bg-gray-400 rounded-full shadow transform transition-transform duration-300" />
                <span className="mr-3 text-gray-500 dark:text-gray-300">
                  Dark mode
                </span>
              </label>
            </div>
            <div className="p-4">
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
  );
};

export default Sidebar;
