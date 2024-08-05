import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the necessary components with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardChart = () => {
  const data = {
    labels: ['Back End', 'Front End', 'Quality Assurance', 'UI/UX'],
    datasets: [
      {
        label: 'Student',
        data: [289, 200, 300, 100],
        backgroundColor: 'rgba(220, 38, 38, 0.8)',
        borderColor: 'rgba(220, 38, 38, 1)',
        borderWidth: 1,
        barThickness: 100,  // Set the bar thickness here
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        categoryPercentage: 0.8,  // Adjust the category percentage
        barPercentage: 0.9,       // Adjust the bar percentage
      },
      y: {
        beginAtZero: true,
        max: 400,
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full h-[500px]">
      <h2 className="text-lg font-semibold mb-4">Student</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default DashboardChart;
