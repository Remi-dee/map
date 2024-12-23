import React from "react";
import { GiCancel } from "react-icons/gi";
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
import { PiToggleRightFill } from "react-icons/pi";
import { PiChatsCircle } from "react-icons/pi";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const MobileNav = ({ sidebarOpen, setSidebarOpen }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
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
    <div>
      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div
          className={`fixed inset-0 z-40 dark:bg-[#383544] bg-white lg:bg-transparent lg:relative lg:inset-auto lg:w-auto transition-all duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <div
            className={`lg:hidden fixed top-0 left-0 h-full dark:bg-[#383544] bg-white w-64 transition-transform ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Close Button on Mobile */}
            <button onClick={() => setSidebarOpen(false)}>
              <GiCancel className="h-6 w-6" />
            </button>

            {/* Sidebar content */}
            <ul className="mt-4">
              <li className="flex items-center p-4  hover:bg-[#FCF7FF] dark:hover:bg-[#8576FF]">
                <HomeIcon className="h-6 w-6 text-gray-500 dark:text-[#FFFFFF]" />
                <span className="ml-4 text-[14px] font-normal leading-[20px] text-left dark:text-[#FFFFFF]">
                  Home
                </span>
              </li>
              <li className="flex items-center p-4  hover:bg-[#FCF7FF] dark:hover:bg-[#8576FF]">
                <CalendarIcon className="h-6 w-6 text-gray-500 dark:text-[#FFFFFF]" />
                <span className="ml-4  text-[14px] font-normal leading-[20px] text-left dark:text-[#FFFFFF]">
                  Events
                </span>
              </li>
              <li className="flex items-center p-4 hover:bg-[#FCF7FF] dark:hover:bg-[#8576FF] dark:text-[#FFFFFF]">
                <BiUserVoice className="h-6 w-6 text-gray-500 dark:text-[#FFFFFF]" />
                <span className="ml-4  text-[14px] font-normal leading-[20px] text-left dark:text-[#FFFFFF]">
                  Speakers
                </span>
              </li>
              <li className="flex items-center p-4 hover:bg-[#FCF7FF] dark:hover:bg-[#8576FF]">
                <BellIcon className="h-6 w-6 text-gray-500 dark:text-[#FFFFFF]" />
                <span className="ml-4 text-[14px] font-normal leading-[20px] text-left dark:text-[#FFFFFF]">
                  Notifications
                </span>
              </li>
              <li className="flex items-center p-4 hover:bg-[#FCF7FF] dark:hover:bg-[#8576FF] dark:text-[#FFFFFF]">
                <PiChatsCircle className="h-6 w-6 text-gray-500 dark:text-[#FFFFFF]" />
                <span className="ml-4 text-[14px] font-normal leading-[20px] text-left">
                  Messages
                </span>
              </li>
              <li className="flex items-center p-4 hover:bg-[#FCF7FF] dark:hover:bg-[#8576FF] dark:text-[#FFFFFF]">
                <UserIcon className="h-6 w-6 text-gray-500 dark:text-[#FFFFFF]" />
                <span className="ml-4  text-[14px] font-normal leading-[20px] text-left">
                  Profile
                </span>
              </li>
              <li className="flex items-center p-4 hover:bg-[#FCF7FF] dark:hover:bg-[#8576FF] dark:text-[#FFFFFF]">
                <CogIcon className="h-6 w-6 text-gray-500 dark:text-[#FFFFFF]" />
                <span className="ml-4  text-[14px] font-normal leading-[20px] text-left">
                  Settings
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
