"use client";

import Sidebar from "./Components/SideBar";
import { useState, useEffect } from "react";
import WorkflowContainer from "./Components/WorkFlowContainer";
import Navbar from "./Components/Navbar";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Persist dark mode preference in local storage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <div className="min-h-screen flex pt-0 px-[20px] lg:p-0 w-full font-inter gap-[28px] dark:bg-[#383544] dark:border-gray-700">
      <Sidebar />

      <main className="flex-1 w-full">
        <Navbar />
        <WorkflowContainer />
      </main>
    </div>
  );
}
