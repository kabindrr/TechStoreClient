import React from "react";
import { Bar } from "react-chartjs-2";

export const BarChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(54, 162, 235, 0.8)",
        hoverBorderColor: "rgba(54, 162, 235, 1)",
        data: [65, 59, 80, 81, 56],
      },
      {
        label: "Production Costs",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 99, 132, 0.8)",
        hoverBorderColor: "rgba(255, 99, 132, 1)",
        data: [28, 48, 40, 19, 86],
      },
    ],
  };
  return (
    <div className="p-5 text-center">
      <h2>Bar Chart</h2>
      <Bar data={data} />
    </div>
  );
};
