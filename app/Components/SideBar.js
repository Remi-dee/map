"use client";
import { useState } from "react";
import {
  HomeIcon,
  CalendarIcon,
  BellIcon,
  UserIcon,
  CogIcon,
} from "@heroicons/react/outline"; // Use any icons
import DoubleArrow from "@/app/assets/doubleArrowRight.png";
import Image from "next/image";
import User from "@/app/assets/Profile.png";
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`flex  ${
        isCollapsed ? "w-16" : "w-64"
      } h-screen transition-width duration-300 bg-white shadow-lg`}
    >
      {/* Sidebar content */}
      <div className="flex flex-col justify-between w-full">
        <div>
          <ul className="mt-4">
            {" "}
            <li className="flex items-center p-4 hover:bg-gray-200">
              <HomeIcon className="h-6 w-6 text-gray-500" />
              {!isCollapsed && <span className="ml-4">Home</span>}
            </li>
            <li className="flex items-center p-4 hover:bg-gray-200">
              <CalendarIcon className="h-6 w-6 text-gray-500" />
              {!isCollapsed && <span className="ml-4">Events</span>}
            </li>
            <li className="flex items-center p-4 hover:bg-gray-200">
              <BellIcon className="h-6 w-6 text-gray-500" />
              {!isCollapsed && <span className="ml-4">Notifications</span>}
            </li>
            <li className="flex items-center p-4 hover:bg-gray-200">
              <UserIcon className="h-6 w-6 text-gray-500" />
              {!isCollapsed && <span className="ml-4">Profile</span>}
            </li>
            <li className="flex items-center p-4 hover:bg-gray-200">
              <CogIcon className="h-6 w-6 text-gray-500" />
              {!isCollapsed && <span className="ml-4">Settings</span>}
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
                <span className={`${isCollapsed && "hidden rotate-180"} ml-2`}>
                  Collapse
                </span>
              </span>
            </button>
          </ul>
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <Image
              src={User}
              alt="User avatar"
              className="w-8 h-8 rounded-full"
            />
            {!isCollapsed && (
              <div>
                <span>Rudra Devi</span>
                <span className="text-xs text-gray-500">
                  rudra.devi@gmail.com
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
