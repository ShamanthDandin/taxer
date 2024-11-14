import React, { useState } from 'react';

export default function PayeeDetails() {
  const [payeeName, setPayeeName] = useState('');
  const [panCard, setPanCard] = useState('');

  const submitPayeeDetails = () => {
    // Here you can handle form submission, e.g., send data to the backend
    console.log("Payee Name:", payeeName);
    console.log("PAN Card Number:", panCard);
  };

  return (
    <div className="section form-section w-full p-6 bg-white rounded-lg shadow-md max-w-md">
      <h3 className="text-2xl font-bold mb-4">Payee Details</h3>
      
      <div className="form-group mb-4">
        <label htmlFor="payeeName" className="block font-semibold mb-2">Payee Name:</label>
        <input
          type="text"
          id="payeeName"
          value={payeeName}
          onChange={(e) => setPayeeName(e.target.value)}
          placeholder="Enter Payee Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="panCard" className="block font-semibold mb-2">PAN Card Number:</label>
        <input
          type="text"
          id="panCard"
          value={panCard}
          onChange={(e) => setPanCard(e.target.value)}
          placeholder="Enter PAN Card Number"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <button
        onClick={submitPayeeDetails}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Submit Payee Details
      </button>
    </div>
  );
}
