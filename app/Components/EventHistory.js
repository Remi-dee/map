"use client";

import React, { useState, useEffect } from "react";

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
  // Add more events for testing pagination...
];

const EventHistory = () => {
  const [filteredData, setFilteredData] = useState(mockData);
  const [filter, setFilter] = useState({ name: "", status: "", date: "" });
  const [sortOrder, setSortOrder] = useState("Most Recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Filtering and Sorting
  useEffect(() => {
    let updatedData = mockData;

    // Filter by name
    if (filter.name) {
      updatedData = updatedData.filter((item) =>
        item.name.toLowerCase().includes(filter.name.toLowerCase())
      );
    }

    // Filter by status
    if (filter.status) {
      updatedData = updatedData.filter((item) => item.status === filter.status);
    }

    // Filter by date
    if (filter.date) {
      updatedData = updatedData.filter((item) =>
        item.date.includes(filter.date)
      );
    }

    // Sort the data
    if (sortOrder === "Most Recent") {
      updatedData.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOrder === "Oldest") {
      updatedData.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortOrder === "Name") {
      updatedData.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredData(updatedData);
  }, [filter, sortOrder]);

  // Pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className="p-6">
      {/* Filters and Sorting */}
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="p-2 border border-gray-300 rounded"
          onChange={(e) => setFilter({ ...filter, name: e.target.value })}
        />
        <select
          className="p-2 border border-gray-300 rounded"
          onChange={(e) => setFilter({ ...filter, status: e.target.value })}
        >
          <option value="">Filter by status</option>
          <option value="Completed">Completed</option>
          <option value="In Progress">In Progress</option>
        </select>
        <input
          type="date"
          className="p-2 border border-gray-300 rounded"
          onChange={(e) => setFilter({ ...filter, date: e.target.value })}
        />
        <select
          className="p-2 border border-gray-300 rounded"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="Most Recent">Sort: Most Recent</option>
          <option value="Oldest">Sort: Oldest</option>
          <option value="Name">Sort: Name</option>
        </select>
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
      <div className="flex justify-between items-center mt-4">
        {/* Pagination arrows */}
        <div>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded-l"
          >
            ←
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded-r"
          >
            →
          </button>
        </div>

        {/* Rows per page */}
        <div className="flex items-center space-x-2">
          <span>Show:</span>
          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            className="p-1 border"
          >
            <option value={5}>5 rows</option>
            <option value={10}>10 rows</option>
            <option value={20}>20 rows</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default EventHistory;
