"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import ArrowLeft from "../assets/arrow_left.png";
import ArrowRight from "../assets/arrow_right.png";
import Download from "../assets/download.png";
import Elipse from "../assets/elipse.png";
import { MdArrowForwardIos } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import EventModal from "./EventModal";

// Mock data
const mockData = [
  {
    name: "Cloud Innovation Summit",
    date: "2024-10-15",
    speaker: "Jane Doe",
    status: "Completed",
    id: 0,
  },
  {
    name: "Blockchain Revolution Conference",
    date: "2024-11-05",
    speaker: "Dr. Peter Smith",
    status: "In Progress",
    id: 1,
  },
  {
    name: "AI in Healthcare Symposium",
    date: "2024-12-01",
    speaker: "Dr. Aisha Malik",
    status: "Completed",
    id: 2,
  },
  {
    name: "Future of Fintech Forum",
    date: "2024-10-25",
    speaker: "John Lee",
    status: "Completed",
    id: 3,
  },
  {
    name: "Data Analytics in Business",
    date: "2024-11-12",
    speaker: "Rachel Moore",
    status: "Completed",
    id: 4,
  },
  {
    name: "Sustainable Energy Expo",
    date: "2024-09-28",
    speaker: "Prof. Alan Green",
    status: "In Progress",
    id: 5,
  },
  {
    name: "Web3 Interfaces Workshop",
    date: "2024-10-10",
    speaker: "Kevin Adams",
    status: "In Progress",
    id: 6,
  },
  {
    name: "Cybersecurity for Startups",
    date: "2024-11-19",
    speaker: "Emily Zhang",
    status: "Completed",
    id: 7,
  },
  {
    name: "Smart Cities Forum",
    date: "2024-10-18",
    speaker: "Dr. Maria Hernandez",
    status: "In Progress",
    id: 8,
  },
  {
    name: "Tech Safari Mixer",
    date: "2024-09-30",
    speaker: "Kevin Adams",
    status: "In Progress",
    id: 9,
  },
];

const EventHistory = () => {
  const [filteredData, setFilteredData] = useState(mockData);
  const [filter, setFilter] = useState({ name: "", status: "", date: "" });
  const [sortOrder, setSortOrder] = useState("Most Recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedEvent, setExpandedEvent] = useState(null);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const pages = [...Array(totalPages).keys()].map((i) => i + 1); // Array of page numbers

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Persist dark mode preference in local storage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Filtering and Sorting
  useEffect(() => {
    let updatedData = mockData;

    // Filtering logic
    if (filter.name) {
      updatedData = updatedData.filter((item) =>
        item.name.toLowerCase().includes(filter.name.toLowerCase())
      );
    }
    if (filter.status) {
      updatedData = updatedData.filter((item) => item.status === filter.status);
    }
    if (filter.date) {
      updatedData = updatedData.filter((item) =>
        item.date.includes(filter.date)
      );
    }

    // Sorting logic
    if (sortOrder === "Most Recent") {
      updatedData.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOrder === "Oldest") {
      updatedData.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortOrder === "Name") {
      updatedData.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredData(updatedData);
  }, [filter, sortOrder]);

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const toggleEventDetails = (index) => {
    if (expandedEvent === index) {
      setExpandedEvent(null); // Collapse the expanded event
    } else {
      setExpandedEvent(index); // Expand the selected event
    }
  };

  // CSV download logic
  const downloadCSV = () => {
    const headers = ["Event Name", "Date", "Speaker", "Status"];
    const rows = filteredData.map((event) => [
      event.name,
      event.date,
      event.speaker,
      event.status,
    ]);

    let csvContent = `data:text/csv;charset=utf-8,${headers.join(",")}\n`;
    rows.forEach((rowArray) => {
      let row = rowArray.join(",");
      csvContent += row + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "event_history.csv");
    document.body.appendChild(link); // Required for Firefox
    link.click();
    document.body.removeChild(link);
  };

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEdit = () => {
    // Handle the edit functionality
    console.log("Edit event:", selectedEvent);
  };

  const handleDelete = () => {
    const updatedData = mockData.filter(
      (event) => event.id !== selectedEvent.id
    );
    setFilteredData(updatedData);
    closeModal();
  };

  const handleMarkAsCompleted = () => {
    const updatedData = mockData.map((event) =>
      event.name === selectedEvent.name
        ? { ...event, status: "Completed" }
        : event
    );
    setFilteredData(updatedData);
    closeModal();
  };

  const handleSave = (updatedEvent) => {
    // Update the selected event in the filtered data list based on the unique id
    const updatedData = filteredData.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );

    setFilteredData(updatedData);
    closeModal();
  };

  return (
    <div className="w-full mt-[21px] lg:mt-[28px] mb-[85px] lg:mb-0">
      <h1 className="text-xl font-medium leading-5 text-left mb-[21px] dark:text-white  lg:mb-[6px]">
        Event History
      </h1>

      <div className="flex  mb-4 lg:flex-row flex-col lg:items-center  lg:justify-between items-center w-full">
        {/* Filters and Sorting */}
        <div className="flex lg:gap-[8px]  lg:flex-row flex-col gap-2 lg:items-center w-full">
          <input
            type="text"
            placeholder="Search..."
            className=" lg:w-[200px] p-2  border border-[#E2E8F0] rounded dark:text-[#FCF7FF] dark:bg-[#484554] dark:border-[#484554] text-[#CBD5E1]"
            onChange={(e) => setFilter({ ...filter, name: e.target.value })}
          />

          <input
            type="date"
            placeholder="Date"
            className=" px-4 py-2 border border-[#E2E8F0] dark:text-[#FCF7FF] dark:bg-[#484554] dark:border-[#484554] rounded"
            onChange={(e) => setFilter({ ...filter, date: e.target.value })}
          />

          <select
            className="px-4 py-3 border border-[#E2E8F0] dark:text-[#FCF7FF] dark:bg-[#484554] dark:border-[#484554] rounded"
            onChange={(e) => setFilter({ ...filter, status: e.target.value })}
          >
            <option value="">Status</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
          </select>

          <select
            className="px-4 py-3 border border-[#E2E8F0] dark:text-[#FCF7FF] dark:bg-[#484554] dark:border-[#484554] rounded"
            onChange={(e) => setFilter({ ...filter, status: e.target.value })}
          >
            <option value="">Name</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
          </select>

          <span>
            {" "}
            <h1 className="text-[18px] mb-[10px] lg:mb-0 w-[200px]    font-medium leading-5   dark:text-white ">
              Displaying {rowsPerPage} rows
            </h1>
          </span>
        </div>
        <div className="flex lg:mr-[-52px] items-center flex-col lg:flex-row gap-2 w-full  ">
          <div className="flex justify-between items-center gap-2 mb-4 lg:mb-0 w-full lg:w-[240px] ">
            <span className="dark:text-[#FCF7FF]">Sort: </span>
            <select
              className="px-4 py-3 border border-[#E2E8F0]  dark:bg-[#484554] dark:border-[#484554] dark:text-[#FCF7FF] rounded"
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="Most Recent"> Most Recent</option>
              <option value="Oldest">Oldest</option>
              <option value="Name">Name</option>
            </select>
          </div>
          {/* Download CSV Button */}
          <div className="flex justify-between mb-4 lg:mb-0 dark:text-[#FCF7FF]  w-full ">
            <button
              className="flex lg:hidden text-center justify-center  lg:w-[100px] items-center gap-3 px-4 py-2 border border-[#E2E8F0] text-black rounded hover:bg-gray-400"
              onClick={downloadCSV}
            >
              <Image
                aria-hidden
                src={Elipse}
                alt="Arrow up"
                width={3}
                height={3}
              />
            </button>
            <button
              className="flex dark:bg-[#484554] dark:border-[#484554] text-center justify-center w-[115px] lg:w-[124px] dark:text-[#FCF7FF] items-center gap-3 py-2 border border-[#E2E8F0] text-black rounded hover:bg-gray-400"
              onClick={downloadCSV}
            >
              <FiDownload className="text-gray-500  dark:text-[#FCF7FF] " />
              <span> Export</span>
            </button>{" "}
          </div>{" "}
        </div>
      </div>

      {/* Table */}
      <table className="min-w-full hidden lg:table ">
        <thead>
          <tr className="bg-gray-200 dark:text-[#FFFFFF] dark:bg-[#6A6676]">
            <th className="p-4  text-[12px] font-semibold leading-[16px] text-left dark:text-[#FFFFFF] text-[#64748B]">
              Event Name
            </th>
            <th className="p-4  text-[12px] font-semibold leading-[16px] text-left dark:text-[#FFFFFF] text-[#64748B]">
              Date
            </th>
            <th className="p-4  text-[12px] font-semibold leading-[16px] text-left dark:text-[#FFFFFF] text-[#64748B]">
              Speaker
            </th>
            <th className="p-4  text-[12px] font-semibold leading-[16px] text-left dark:text-[#FFFFFF] text-[#64748B]">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="text-[#334155] dark:text-[#FCF7FF] dark:bg-[#484554] ">
          {currentRows.map((event, index) => (
            <tr
              key={index}
              onClick={() => openModal(event)}
              className="cursor-pointer hover:bg-gray-100"
            >
              <td className="p-2">{event.name}</td>
              <td className="p-2">{event.date}</td>
              <td className="p-2">{event.speaker}</td>

              <td className="p-2">
                <span
                  className={`relative inline-flex items-center min-w-[80px] lg:min-w-[0px] px-[8px] py-[4px] text-xs rounded-[100px] ${
                    event.status === "Completed"
                      ? "bg-[#D1FAE5] text-[#10B981]"
                      : "bg-[#DBEAFE] text-[#3B82F6]"
                  }`}
                >
                  {/* Circle indicator inside the status */}
                  <span
                    className={`hidden absolute left-2 lg:inline-block w-[8px] h-[8px] rounded-full ${
                      event.status === "Completed"
                        ? "bg-[#10B981]" // Green for completed
                        : "bg-[#3B82F6]" // Blue for in progress
                    }`}
                  ></span>

                  {/* Shift text to make room for the circle */}
                  <span className="lg:ml-4">{event.status}</span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Version with Collapse Functionality */}
      <div className="block lg:hidden   -mx-5">
        <div className="">
          <div className="bg-gray-200 dark:text-[#FFFFFF] dark:bg-[#6A6676] flex justify-between">
            <div className="p-4  text-[12px] font-semibold leading-[16px] text-left dark:text-[#FFFFFF] text-[#64748B]">
              Event Name
            </div>
            <div className="p-4  text-[12px] font-semibold leading-[16px] text-left dark:text-[#FFFFFF] text-[#64748B]">
              Status
            </div>
          </div>
        </div>

        {currentRows.map((event, index) => (
          <div
            key={index}
            className="w-full py-2 px-4  text-[#334155] dark:text-[#FCF7FF] dark:bg-[#484554] "
          >
            {/* Event Header - Click to Expand/Collapse */}
            <div
              className="flex justify-between items-center cursor-pointer p-3 "
              onClick={() => toggleEventDetails(index)}
            >
              <p className="text-[16px] font-semibold">{event.name}</p>
              <span
                className={`relative inline-flex items-center px-[8px] py-[4px] text-xs rounded-full ${
                  event.status === "Completed"
                    ? "bg-[#D1FAE5] text-[#10B981]"
                    : "bg-[#DBEAFE] text-[#3B82F6]"
                }`}
              >
                <span>{event.status}</span>
              </span>
            </div>

            {/* Expandable Content (Speaker and Date) */}
            <div
              className={`mt-2 -mx-5 p-[16px] px-[30px] text-sm flex justify-between text-[#334155] dark:text-[#FCF7FF] dark:bg-[#383544] ${
                expandedEvent === index ? "block" : "hidden"
              }`}
            >
              <p className="font-medium">Speaker: {event.speaker}</p>
              <p>Date: {event.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}

      <div className="flex justify-between">
        <div className="flex justify-center items-center mt-4 space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`font-semibold p-[16px] border dark:bg-[#484554] dark:border-[#484554] rounded ${
              currentPage === 1
                ? "dark:bg-gray-500 bg-gray-200  cursor-not-allowed"
                : "hover:bg-gray-100 dark:hover:bg-gray-500"
            }`}
          >
            <MdArrowForwardIos className="text-gray-500  dark:text-[#8576FF] rotate-180" />
          </button>
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1  ${
                currentPage === page
                  ? "bg-[#8576FF] text-white border rounded-full"
                  : "hover:bg-gray-100 dark:hover:bg-gray-500  rounded-full dark:text-[#FFFFFF]"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`p-[16px] border dark:bg-[#484554] dark:border-[#484554] rounded ${
              currentPage === totalPages
                ? "dark:bg-gray-500 bg-gray-200 cursor-not-allowed"
                : "hover:bg-gray-100  dark:hover:bg-gray-500"
            }`}
          >
            <MdArrowForwardIos className="text-gray-500  dark:text-[#8576FF]" />
          </button>
        </div>

        {/* Rows per page */}
        <div className="flex items-center space-x-2 mt-4  dark:text-[#FFFFFF]">
          <span>Show:</span>
          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            className="p-2 border dark:bg-[#484554] dark:border-[#484554] border-gray-300 rounded"
          >
            <option value={5}>5 rows</option>
            <option value={10}>10 rows</option>
            <option value={20}>20 rows</option>
          </select>
        </div>
      </div>

      {/* Modal for event details */}
      {isModalOpen && (
        <EventModal
          event={selectedEvent}
          isOpen={isModalOpen}
          onClose={closeModal}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onMarkAsCompleted={handleMarkAsCompleted}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default EventHistory;
