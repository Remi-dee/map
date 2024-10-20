"use client"
import { useState } from "react";
import { HomeIcon, CalendarIcon, BellIcon, UserIcon, CogIcon } from '@heroicons/react/outline'; // Use any icons

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`flex ${isCollapsed ? 'w-16' : 'w-64'} h-screen transition-width duration-300 bg-white shadow-lg`}>
      {/* Sidebar content */}
      <div className="flex flex-col justify-between w-full">
        <div>
          <button
            className="p-4"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {/* Collapse/Expand icon */}
            <span className={`${isCollapsed ? 'rotate-180' : ''} transition-transform`}>←</span>
          </button>
          <ul className="mt-4">
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
          </ul>
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <img src="/path-to-avatar" alt="User avatar" className="w-8 h-8 rounded-full" />
            {!isCollapsed && (
              <div>
                <span>Rudra Devi</span>
                <span className="text-xs text-gray-500">rudra.devi@gmail.com</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
