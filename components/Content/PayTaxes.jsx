import React, { useState } from 'react';

export default function PayTaxes() {
  // These values could be fetched from a backend or passed as props in a real application
  const [payeeName] = useState('John Doe'); // Example default value
  const [panCard] = useState('ABCDE1234F'); // Example default value
  const [finalTaxAmount] = useState(5000); // Example default value

  const proceedToPay = () => {
    alert('Redirecting to payment gateway...');
    // Add actual redirection to the payment gateway here
  };

  return (
    <div className="section form-section p-6 bg-white rounded-lg shadow-md max-w-md">
      <h3 className="text-2xl font-bold mb-6">Pay Your Taxes</h3>

      <p className="mb-2"><strong>Payee Name:</strong> <span>{payeeName}</span></p>
      <p className="mb-2"><strong>PAN Card Number:</strong> <span>{panCard}</span></p>
      <p className="mb-4"><strong>Final Tax Amount:</strong> ₹<span>{finalTaxAmount}</span></p>

      <button
        onClick={proceedToPay}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Proceed to Pay
      </button>
    </div>
  );
}
