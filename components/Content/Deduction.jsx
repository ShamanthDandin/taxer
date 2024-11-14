import React, { useState } from 'react';

export default function Deductions() {
  const [deduction80C, setDeduction80C] = useState('');
  const [deduction80D, setDeduction80D] = useState('');
  const [deduction80E, setDeduction80E] = useState('');
  const [deduction80G, setDeduction80G] = useState('');
  const [deduction80EEA, setDeduction80EEA] = useState('');

  const handleSubmit = () => {
    console.log("80C Deduction:", deduction80C);
    console.log("80D Deduction:", deduction80D);
    console.log("80E Deduction:", deduction80E);
    console.log("80G Deduction:", deduction80G);
    console.log("80EEA Deduction:", deduction80EEA);
    // Add any submission logic here, e.g., sending data to a backend
  };

  return (
    <div className="section form-section w-full p-6 bg-white rounded-lg shadow-md max-w-md">
      <h3 className="text-2xl font-bold mb-6">Tax Deduction Details</h3>

      <div className="form-group mb-4">
        <label htmlFor="deduction80C" className="block font-semibold mb-2">80C Deduction (₹):</label>
        <input
          type="text"
          id="deduction80C"
          value={deduction80C}
          onChange={(e) => setDeduction80C(e.target.value)}
          placeholder="Enter amount"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="deduction80D" className="block font-semibold mb-2">80D Deduction (₹):</label>
        <input
          type="text"
          id="deduction80D"
          value={deduction80D}
          onChange={(e) => setDeduction80D(e.target.value)}
          placeholder="Enter amount"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="deduction80E" className="block font-semibold mb-2">80E Deduction (₹):</label>
        <input
          type="text"
          id="deduction80E"
          value={deduction80E}
          onChange={(e) => setDeduction80E(e.target.value)}
          placeholder="Enter amount"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="deduction80G" className="block font-semibold mb-2">80G Deduction (₹):</label>
        <input
          type="text"
          id="deduction80G"
          value={deduction80G}
          onChange={(e) => setDeduction80G(e.target.value)}
          placeholder="Enter amount"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="deduction80EEA" className="block font-semibold mb-2">80EEA Deduction (₹):</label>
        <input
          type="text"
          id="deduction80EEA"
          value={deduction80EEA}
          onChange={(e) => setDeduction80EEA(e.target.value)}
          placeholder="Enter amount"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Submit Deduction Details
      </button>
    </div>
  );
}
