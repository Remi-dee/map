"use client";
import { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { LiaToggleOnSolid } from "react-icons/lia";
import Logo from "@/app/assets/Logo.png";
import LogoMobile from "@/app/assets/logoMobile.png";
import { GiCancel } from "react-icons/gi";
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
import MobileNav from "./MobileNav";
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false); // Add state for mobile sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      {/* Hamburger Icon for mobile */}
      <div className="lg:hidden flex justify-between border-b p-[16px] border-b-[#E2E8F0] items-center ">
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
          isCollapsed ? "w-16 " : "p-[20px]"
        } h-[100] transition-width dark:bg-[#484554] dark:border-gray-700 duration-300  bg-white border-r border-[#F1F5F9]`}
      >
        {/* Sidebar content */}
        <div className={`flex flex-col justify-between ${""}`}>
          <div>
            {isCollapsed ? (
              <Image
                src={LogoMobile}
                alt="Logo"
                className="w-[32px] h-8 m-[14px]"
              />
            ) : (
              <Image src={Logo} alt="Logo" className="w-[64px] h-8 m-[8px]" />
            )}
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

      {/*sidebar on mobile*/}
      <div
        className={`fixed inset-0 z-40  bg-white lg:bg-transparent lg:relative lg:inset-auto lg:w-auto transition-all duration-300 ${
          sidebarOpen ? "translate-x-0 w-full" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div
          className={`lg:hidden dark:bg-[#484554] dark:border-gray-700 fixed top-0 left-0 h-full w-full bg-white p-[16px] transition-transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center">
            {" "}
            <Image src={Logo} alt="Logo" className="w-[64px] h-8" />
            {/* Close Button on Mobile */}
            <button
              className="w-[28px] font-medium  border dark:bg-white text-[#334155] rounded-full border-[#E2E8F0]"
              onClick={() => setSidebarOpen(false)}
            >
              {/* <GiCancel className="h-6 w-6 border rounded-full border-[#E2E8F0]" /> */}
              <span>x</span>
            </button>
          </div>

          {/* Sidebar content */}
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
      <div
        className={`fixed z-50 bottom-0 left-0 w-full border-t border-[#F3F4F6] dark:bg-[#383544] p-4 bg-white sm:hidden ${
          sidebarOpen ? "hidden" : "flex"
        } justify-around`}
      >
        {mobileTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex flex-col items-center space-y-1 ${
              activeTab === tab.id
                ? "text-[#8576FF]  border-[#8576FF] border-t-2 "
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
