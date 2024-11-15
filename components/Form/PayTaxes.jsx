import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

export default function PayTaxes({ name, panCard, tax, formData, onSubmit }) {
  const [web3, setWeb3] = useState(null);

  // Initialize Web3 on component mount
  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      console.log("Web3 initialized with MetaMask provider.");
    } else {
      console.error("MetaMask is not installed.");
      alert("Please install MetaMask to use this feature.");
    }
  }, []);

  const proceedToPay = async () => {
    if (!web3) {
      alert("Web3 is not initialized. Please install MetaMask and try again.");
      return;
    }

    console.log("Form Data:", formData);
    alert('Redirecting to payment gateway...');

    // Ensure MetaMask is connected
    if (!window.ethereum.selectedAddress) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log("MetaMask connected successfully.");
      } catch (error) {
        if (error.code === -32002) {
          alert("MetaMask request is already pending. Please complete the MetaMask prompt or try again.");
        } else {
          console.error("MetaMask connection failed:", error);
          alert("Please connect to MetaMask and try again.");
        }
        return;
      }
    }

    // Define the tax amount and conversion rate
    const finalTaxAmountInINR = tax; // Assuming tax amount is in INR (e.g., 25000 INR)
    console.log("Final Tax Amount in INR:", finalTaxAmountInINR);

    const ethToInrRate = 267161.81; // Update to the current ETH to INR conversion rate if needed
    console.log("ETH to INR Conversion Rate:", ethToInrRate);

    // Convert the tax amount from INR to ETH
    const ethAmount = parseFloat((finalTaxAmountInINR / ethToInrRate).toFixed(8));
    console.log("Converted Final Tax Amount in ETH:", ethAmount);

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log("MetaMask accounts:", accounts);

      const senderAddress = "0xC12D8913A43D6Df31F05c2c45d432cCaEC83bb6e";
      const receiverAddress = "0x7E9F09c1B8ABb6eF9043EcC53388E9888FfA1DDD";

      if (accounts[0].toLowerCase() !== senderAddress.toLowerCase()) {
        alert(`Please switch to the correct sender address: ${senderAddress}`);
        return;
      }

      // Convert ETH amount to Wei for the transaction
      const amountInWei = web3.utils.toWei(ethAmount.toString(), 'ether');
      console.log("Amount in Wei (to be sent):", amountInWei);

      const transactionParameters = {
        to: receiverAddress,
        from: senderAddress,
        value: amountInWei,
        gas: '21000' // Standard gas limit for ETH transfer
      };

      console.log("Initiating transaction with parameters:", transactionParameters);

      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });

      console.log('Transaction successful! TxHash:', txHash);
      alert(`Transaction of ${ethAmount.toFixed(6)} ETH initiated successfully!`);
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed. Please try again.");
    }
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
