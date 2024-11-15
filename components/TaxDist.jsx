// import React, { useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export default function TaxDistribution() {
//   const [showPopup, setShowPopup] = useState(false);

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };

//   const barChartData = {
//     labels: [
//       'Defense',
//       'Finance',
//       'Foreign Affairs',
//       'Health',
//       'Agriculture',
//       'Transport',
//       'Energy',
//       'Science & Technology',
//       'Housing',
//       'Crisis Management Fund',
//     ],
//     datasets: [
//       {
//         label: 'Amount Allocated (₹)',
//         data: [1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
//         backgroundColor: '#4b9cd3',
//       },
//     ],
//   };

//   const options = {
//     indexAxis: 'y',
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       x: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: 'Amount Allocated (₹)',
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//       },
//     },
//   };

//   return (
//     <div className="section form-section p-6 bg-blue-50 rounded-lg shadow-md border border-blue-300 w-full overflow-y-auto">
//       <h3 className="text-2xl font-bold text-center mb-4">Tax Allocation</h3>

//       <p className="text-center font-semibold mb-2">
//         Tax Revenue Distribution (Total: ₹0.00)
//       </p>

//       {/* Toggle Button */}
//       <div className="flex justify-center mb-4">
//         <button
//           onClick={togglePopup}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
//         >
//           View Distribution Chart
//         </button>
//       </div>

//       {/* Popup Modal */}
//       {showPopup && (
//   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//     <div className="bg-white p-6 pb-20 pr-5 rounded-lg shadow-lg max-w-5xl w-full h-full relative">
//       <button
//         onClick={togglePopup}
//         className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl"
//       >
//         &times;
//       </button>
//       <h4 className="text-2xl font-bold text-center mb-6">Tax Distribution Chart</h4>
//       <div className="h-full w-full">
//         <Bar data={barChartData} options={options} />
//       </div>
//     </div>
//   </div>
// )}

//     </div>
//   );
// }
