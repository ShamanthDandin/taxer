import React from 'react';

export default function PayTaxes({ name, panCard, tax, formData, onSubmit }) {
  const proceedToPay = () => {
 
    console.log("Form Data:", formData);

    onSubmit([name, panCard, tax.toString()]);
    alert('Redirecting to payment gateway...');
    
  };

  return (
    <div className="section form-section p-6 bg-white rounded-lg shadow-md max-w-md">
      <h3 className="text-2xl font-bold mb-6">Pay Your Taxes</h3>

      <p className="mb-2"><strong>Payee Name:</strong> <span>{name}</span></p>
      <p className="mb-2"><strong>PAN Card Number:</strong> <span>{panCard}</span></p>
      <p className="mb-4"><strong>Final Tax Amount:</strong> ₹<span>{tax}</span></p>

      <button
        onClick={proceedToPay}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Proceed to Pay
      </button>
    </div>
  );
}
