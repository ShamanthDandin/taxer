import React, { useState } from 'react';

export default function IncomeDetails() {
  const [salaryIncome, setSalaryIncome] = useState('');
  const [interestIncome, setInterestIncome] = useState('');
  const [rentalIncome, setRentalIncome] = useState('');
  const [digitalIncome, setDigitalIncome] = useState('');

  const handleSubmit = () => {
    console.log("Gross Salary Income:", salaryIncome);
    console.log("Annual Income from Interest:", interestIncome);
    console.log("Rental Income Received:", rentalIncome);
    console.log("Income from Digital Assets:", digitalIncome);
    // Add any submission logic here, e.g., sending data to a backend
  };

  return (
    <div className="section form-section w-full p-6 bg-white rounded-lg shadow-md max-w-md">
      <h3 className="text-2xl font-bold mb-6">Income Details</h3>
      
      <div className="form-group mb-4">
        <label htmlFor="salaryIncome" className="block font-semibold mb-2">Gross Salary Income (₹):</label>
        <input
          type="text"
          id="salaryIncome"
          value={salaryIncome}
          onChange={(e) => setSalaryIncome(e.target.value)}
          placeholder="Enter gross salary"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="interestIncome" className="block font-semibold mb-2">Annual Income from Interest (₹):</label>
        <input
          type="text"
          id="interestIncome"
          value={interestIncome}
          onChange={(e) => setInterestIncome(e.target.value)}
          placeholder="Enter interest income"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="rentalIncome" className="block font-semibold mb-2">Rental Income Received (₹):</label>
        <input
          type="text"
          id="rentalIncome"
          value={rentalIncome}
          onChange={(e) => setRentalIncome(e.target.value)}
          placeholder="Enter rental income"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="digitalIncome" className="block font-semibold mb-2">Income from Digital Assets (₹):</label>
        <input
          type="text"
          id="digitalIncome"
          value={digitalIncome}
          onChange={(e) => setDigitalIncome(e.target.value)}
          placeholder="Enter digital asset income"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Submit Income Details
      </button>
    </div>
  );
}
