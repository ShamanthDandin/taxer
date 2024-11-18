import React from 'react';
import { parseEther, BrowserProvider } from 'ethers';

/**
 * Function to save transaction details to the backend.
 * @param {Object} transactionDetails - The transaction details to save.
 */
async function saveTransactionDetails(transactionDetails) {
  try {
    const response = await fetch('/api/store', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transactionDetails),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to save transaction details');
    }

    const result = await response.json();
    console.log('Transaction saved successfully:', result);
  } catch (error) {
    console.error('Error saving transaction details:', error);
    alert('Error saving transaction details. Please try again later.');
  }
}

export default function PayTaxes({ name, panCard, tax, formData, onSubmit }) {
  const ethConversionRate = 263157.89;

  const proceedToPay = async () => {
    try {
      console.log('final tax', tax);
      console.log('Form Data:', formData);
      const income = formData.incomeDetails[0]; // Extract the actual income
      const ethConversionRate = 263157.89; // Static conversion rate
      const taxInEth = tax / ethConversionRate; // Tax in ETH
      const taxInWei = parseEther(taxInEth.toFixed(18)); // Convert ETH to Wei

      console.log(`Income: ${income}`);
      console.log(`Tax in ETH: ${taxInEth}`);
      console.log(`Tax in Wei: ${taxInWei.toString()}`);

      if (typeof window.ethereum !== 'undefined') {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        // Request MetaMask connection
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Send transaction
        const transaction = await signer.sendTransaction({
          to: '0xf402276963261E2B6a836e53bAc67523feaC214a', // Receiver address
          value: taxInWei, // Amount in Wei
        });

        console.log('Transaction sent:', transaction);

        // Wait for the transaction to be mined
        const receipt = await provider.waitForTransaction(transaction.hash);
        const block = await provider.getBlock(receipt.blockNumber);

        const transactionDetails = {
          panCard,
          name,
          income, // Use the extracted income here
          tax,
          timestamp: new Date(block.timestamp * 1000).toISOString(),
          blockHash: receipt.blockHash,
          transactionHash: transaction.hash,
        };

        console.log('Transaction Details:', transactionDetails);

        alert(
          `Transaction Successful!\nMined On: ${transactionDetails.timestamp}\nBlock Hash: ${transactionDetails.blockHash}`
        );

        // Save transaction details in MongoDB
        await saveTransactionDetails(transactionDetails);

        // Call onSubmit callback with form data
        onSubmit(transactionDetails);
      } else {
        alert('MetaMask is not installed. Please install MetaMask to proceed.');
      }
    } catch (error) {
      console.error('Error during transaction:', error);
      alert('Transaction failed. Please try again. Error: ' + error.message);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Pay Your Taxes</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>PAN Card:</strong> {panCard}
      </p>
      <p>
      <strong>Tax Amount (Without CESS):</strong> {tax ? (tax / 1.04).toFixed(0) : '0'}
      </p>
      <p>
        <strong>Tax Amount (With CESS):</strong> {tax ? tax.toLocaleString('en-IN') : '0'}
      </p>
      <button
        onClick={proceedToPay}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 mt-4"
      >
        Proceed to Pay
      </button>
    </div>
  );
}
