import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

export const BarChart = () => {
  const [chartData, setChartData] = useState({
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
  });
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
    ],
  };

  useEffect(() => {
    // axios call to fetch data
    const fetchedData = {
      sales: [100, 300, 500, 600, 200],
    };

    setChartData({
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Sales",
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(54, 162, 235, 0.8)",
          hoverBorderColor: "rgba(54, 162, 235, 1)",
          data: fetchedData.sales,
        },
      ],
    });
  }, []);

  return (
    <div className="p-5 text-center">
      <h2>Bar Chart</h2>
      <Bar data={chartData} />
    </div>
  );
};
