import React, { useState } from 'react';

export default function AgeGroup() {
  const [ageGroup, setAgeGroup] = useState('0-60');

  const submitDetails = () => {
    console.log("Selected Age Group:", ageGroup);
    // Add any submission logic here, e.g., sending data to a backend
  };

  return (
    <div className="section form-section p-6 bg-white rounded-lg shadow-md max-w-md">
      <h3 className="text-2xl font-bold mb-6">Select Your Age Group</h3>
      
      <div className="form-group mb-4">
        <label htmlFor="ageGroupSelect" className="block font-semibold mb-2">Age Group:</label>
        <select
          id="ageGroupSelect"
          value={ageGroup}
          onChange={(e) => setAgeGroup(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="0-60">0-60</option>
          <option value="60-80">60-80</option>
          <option value="80+">80+</option>
        </select>
      </div>

      <button
        onClick={submitDetails}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Submit Details
      </button>
    </div>
  );
}
