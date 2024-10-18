"use client";

import React, { useState, useEffect } from "react";

// Mock data
const mockData = [
  {
    name: "Cloud Innovation Summit",
    date: "2024-10-15",
    speaker: "Jane Doe",
    status: "Completed",
  },
  {
    name: "Blockchain Revolution Conference",
    date: "2024-11-05",
    speaker: "Dr. Peter Smith",
    status: "In Progress",
  },
  {
    name: "AI in Healthcare Symposium",
    date: "2024-12-01",
    speaker: "Dr. Aisha Malik",
    status: "Completed",
  },
  {
    name: "Future of Fintech Forum",
    date: "2024-10-25",
    speaker: "John Lee",
    status: "Completed",
  },
  {
    name: "Data Analytics in Business",
    date: "2024-11-12",
    speaker: "Rachel Moore",
    status: "Completed",
  },
  {
    name: "Sustainable Energy Expo",
    date: "2024-09-28",
    speaker: "Prof. Alan Green",
    status: "In Progress",
  },
  {
    name: "Web3 Interfaces Workshop",
    date: "2024-10-10",
    speaker: "Kevin Adams",
    status: "In Progress",
  },
  {
    name: "Cybersecurity for Startups",
    date: "2024-11-19",
    speaker: "Emily Zhang",
    status: "Completed",
  },
  {
    name: "Smart Cities Forum",
    date: "2024-10-18",
    speaker: "Dr. Maria Hernandez",
    status: "In Progress",
  },
  {
    name: "Tech Safari Mixer",
    date: "2024-09-30",
    speaker: "Kevin Adams",
    status: "In Progress",
  },
];

const EventHistory = () => {
  const [filteredData, setFilteredData] = useState(mockData);
  const [filter, setFilter] = useState({ name: "", status: "", date: "" });
  const [sortOrder, setSortOrder] = useState("Most Recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const pages = [...Array(totalPages).keys()].map((i) => i + 1); // Array of page numbers

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

  return (
    <div className="p-6">
      <div className="flex justify-between">
        {/* Filters and Sorting */}
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search by name"
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => setFilter({ ...filter, name: e.target.value })}
          />

          <input
            type="date"
            placeholder="Date"
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => setFilter({ ...filter, date: e.target.value })}
          />

          <select
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => setFilter({ ...filter, status: e.target.value })}
          >
            <option value="">Status</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
          </select>
          <select
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            Sort: <option value="Most Recent"> Most Recent</option>
            <option value="Oldest">Sort: Oldest</option>
            <option value="Name">Sort: Name</option>
          </select>
        </div>
        {/* Download CSV Button */}
        <div className="mb-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={downloadCSV}
          >
            Export
          </button>
        </div>{" "}
      </div>

      {/* Table */}
      <table className="min-w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Event Name</th>
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Speaker</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((event, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{event.name}</td>
              <td className="p-2">{event.date}</td>
              <td className="p-2">{event.speaker}</td>
              <td className="p-2">
                <span
                  className={`p-1 text-xs rounded ${
                    event.status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {event.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 border rounded ${
            currentPage === 1
              ? "bg-gray-200 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          ←
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 border rounded-full ${
              currentPage === page
                ? "bg-purple-500 text-white"
                : "hover:bg-gray-100"
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
          className={`px-3 py-1 border rounded ${
            currentPage === totalPages
              ? "bg-gray-200 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          →
        </button>
      </div>

      {/* Rows per page */}
      <div className="flex items-center space-x-2 mt-4">
        <span>Show:</span>
        <select
          value={rowsPerPage}
          onChange={(e) => setRowsPerPage(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded"
        >
          <option value={5}>5 rows</option>
          <option value={10}>10 rows</option>
          <option value={20}>20 rows</option>
        </select>
      </div>
    </div>
  );
};

export default EventHistory;
