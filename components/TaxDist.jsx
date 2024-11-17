import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function TaxDistribution() {
  const [mainAmount, setMainAmount] = useState(0); // Default main amount is 0
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Category proportions (in percentage)
  const categoryProportions = [
    { category: 'Defense', proportion: 20 }, // 20%
    { category: 'Finance', proportion: 15 }, // 15%
    { category: 'Foreign Affairs', proportion: 10 }, // 10%
    { category: 'Health', proportion: 25 }, // 25%
    { category: 'Agriculture', proportion: 15 }, // 15%
    { category: 'Transport', proportion: 10 }, // 10%
    { category: 'Energy', proportion: 5 }, // 5%
  ];

  useEffect(() => {
    const fetchTotalTax = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch('/api/totaltax'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Parse the JSON response
        setMainAmount(data.totalTax); // Update the state with the total tax amount
      } catch (err) {
        setError(err.message); // Set the error message
      } finally {
        setLoading(false); // Stop loading
      }
    };
  
    fetchTotalTax();
  }, []);
  

  // Calculate chart data dynamically
  const chartData = categoryProportions.map((item) => ({
    category: item.category,
    amount: ((mainAmount * item.proportion) / 100).toFixed(2), // Calculate amount based on proportion
  }));

  // Toggle the popup modal
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="section form-section p-6 bg-blue-50 rounded-lg shadow-md border border-blue-300 w-full overflow-y-auto">
      <h3 className="text-2xl font-bold text-center mb-4">Tax Allocation</h3>

      {loading ? (
        <p className="text-center text-gray-500">Loading data...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <>
          

          <p className="text-center font-semibold mb-2">
            Tax Revenue Distribution (Total: ₹{mainAmount.toLocaleString()})
          </p>

          {/* Toggle Button */}
          <div className="flex justify-center mb-4">
            <button
              onClick={togglePopup}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
            >
              View Distribution Chart
            </button>
          </div>

          {/* Popup Modal */}
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl w-full h-[80%] relative overflow-auto">
                {/* Close Button */}
                <button
                  onClick={togglePopup}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl"
                >
                  &times;
                </button>

                <h4 className="text-2xl font-bold text-center mb-6">
                  Tax Distribution Chart
                </h4>

                {/* Recharts Bar Chart */}
                <div className="w-full h-[80%]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chartData}
                      layout="vertical" // Horizontal bars
                      margin={{ top: 20, right: 30, left: 40, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        type="number"
                        label={{
                          value: 'Amount Allocated (₹)',
                          position: 'insideBottom',
                          offset: 0,
                        }}
                      />
                      <YAxis type="category" dataKey="category" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="amount" fill="#4b9cd3" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
