"use client";
import Image from "next/image";
import Header from "./Components/Header";
import Carousel from "./Components/carousel/Carousel";
import BarChart from "./Components/BarChart";
import EventHistory from "./Components/EventHistory";
import Sidebar from "./Components/SideBar";
import { useState, useEffect } from "react";
import QuoteFlow from "./Components/QuoteFlow";
import RequestForQuote from "./Components/RequestForQuote";
import WorkflowContainer from "./Components/WorkFlowContainer";

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
    <div className="min-h-screen lg:flex pt-0 px-[20px] lg:p-0 w-full p-2 font-inter gap-[28px] dark:bg-[#383544] dark:border-gray-700">
      <Sidebar />

      <main className="">
        <Header />
        <WorkflowContainer />
      </main>
    </div>
  );
}
