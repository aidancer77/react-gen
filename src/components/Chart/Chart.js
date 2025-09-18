
import React from "react";
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Регистрируем необходимые компоненты
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const lineChartData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "North America",
        data: [50000, 70000, 80000, 65000], // Values for each quarter
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Color of the bars
        borderColor: "rgba(75, 192, 192, 1)", // Border color of the bars
        borderWidth: 1,
        fill: true,
        lineTension: 0
      }
    ]
  };

  return (
    <Line
      type="line"
      width={160}
      height={22}
      options={{
        title: {
          display: true,
          // text: "COVID-19 Cases of Last 6 Months",
          fontSize: 20
        },
        legend: {
          display: true, //Is the legend shown?
          position: "top" //Position of the legend.
        }
      }}
      data={lineChartData}
    />
  );
};
export default Chart;

