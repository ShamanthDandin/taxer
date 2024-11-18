import React, { useState, useEffect } from 'react';
import {
  BarChart,
  PieChart,
  Bar,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from 'recharts';

export default function TaxDistribution() {
  const [mainAmount, setMainAmount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showPiePopup, setShowPiePopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Category proportions (in percentage)
  const categoryProportions = [
    { category: 'Government Employees', proportion: 30, color: '#FF6384' },
    { category: 'Interest Payments', proportion: 20, color: '#36A2EB' },
    { category: 'Infrastructure', proportion: 15, color: '#FFCE56' },
    { category: 'Defense', proportion: 12, color: '#4BC0C0' },
    { category: 'Finance', proportion: 8, color: '#9966FF' },
    { category: 'Foreign Affairs', proportion: 6, color: '#FF9F40' },
    { category: 'Health', proportion: 4, color: '#E7E9ED' },
    { category: 'Agriculture', proportion: 3, color: '#F7464A' },
    { category: 'Transport', proportion: 2, color: '#5AD3D1' },
  ];
  

  useEffect(() => {
    const fetchTotalTax = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/totaltax'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMainAmount(data.totalTax);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTotalTax();
  }, []);

  const chartData = categoryProportions.map((item) => ({
    category: item.category,
    amount: Math.max(((mainAmount * item.proportion) / 100).toFixed(2), 1), // Minimum value of 1 for display
    color: item.color, // Include color from categoryProportions
  }));
  

  // Toggle popup modals
  const togglePopup = () => setShowPopup(!showPopup);
  const togglePiePopup = () => setShowPiePopup(!showPiePopup);

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

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-4">
            <button
              onClick={togglePopup}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
            >
              View Distribution Bar Graph
            </button>
          </div>

          <div className="flex justify-center mb-4">
            <button
              onClick={togglePiePopup}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
            >
              View Distribution Pie Chart
            </button>
          </div>

          {/* Popup Modal for Bar Chart */}
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl w-full h-[80%] relative overflow-auto">
                <button
                  onClick={togglePopup}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl"
                >
                  &times;
                </button>
                <h4 className="text-2xl font-bold text-center mb-6">
                  Tax Distribution Chart
                </h4>
                <div className="w-full h-[80%]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chartData}
                      layout="vertical"
                      margin={{ top: 20, right: 30, left: 40, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        type="number"
                        domain={[0, mainAmount * 0.60]} // Cap at 60% of total
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

          {/* Popup Modal for Pie Chart */}
          {showPiePopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl w-full h-[80%] relative overflow-auto">
                <button
                  onClick={togglePiePopup}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl"
                >
                  &times;
                </button>
                <h4 className="text-2xl font-bold text-center mb-6">
                  Tax Distribution Pie Chart
                </h4>
                <div className="w-full h-[80%]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      dataKey="amount"
                      nameKey="category"
                      label={(entry) =>
                        `${entry.category}: ₹${parseFloat(entry.amount).toLocaleString()}`
                      }
                      cx="50%"
                      cy="50%"
                      outerRadius="80%"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
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
