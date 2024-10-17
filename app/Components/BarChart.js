// components/BarChart.js
"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        data: [300, 450, 280, 500, 420, 600, 450, 280, 500, 420, 600, 1000],
        backgroundColor: "rgba(133, 118, 255, 1)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    // Ensure chart is responsive
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Sales Data for 2024",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        grid: {
          borderDash: [5, 5], // Dotted line
          color: "rgba(0, 0, 0, 0.1)", // Faint color for the grid lines
        },
        ticks: {
          font: {
            size: 12, // Customize font size if needed
          },
        },
      },
      y: {
        grid: {
          display: true,
          tickBorderDash: [5, 5], // Dotted line
          color: "rgba(0, 0, 0, 0.1)", // Faint color for the grid lines
          drawTicks: true,
        },
        ticks: {
          font: {
            size: 12, // Customize font size if needed
          },
          stepSize: 200, // Force a step of 20 units between ticks
          max: 1000,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full max-w-full lg:max-w-lg mx-auto mt-4 p-4 lg:p-8 border border-gray-200 rounded-lg bg-white ">
      <div className="h-[300px] lg:h-[320px]">
        {" "}
        {/* Container for height control */}
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
