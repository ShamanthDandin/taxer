import React from 'react';
import { parseEther, BrowserProvider } from 'ethers';




export default function PayTaxes({ name, panCard, tax, formData, onSubmit }) {
  const proceedToPay = async () => {
    try {
      console.log('Form Data:', formData);
  
      // Conversion logic: Assume 1 ETH = 263,157.89 (adjust this as needed)
      const ethConversionRate = 263157.89; // 1 ETH = 263,157.89 INR
      const taxInEth = tax / ethConversionRate; // Tax in ETH
      const taxInWei = parseEther(taxInEth.toString()); // Convert ETH to Wei
  
      console.log(`Tax in ETH: ${taxInEth}`);
      console.log(`Tax in Wei: ${taxInWei.toString()}`);
  
      // MetaMask interaction
      if (typeof window.ethereum !== 'undefined') {
        const provider = new BrowserProvider(window.ethereum); // Updated for ethers v6
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
        console.log('Transaction mined:', receipt);
  
        // Fetch block details to get the timestamp
        const block = await provider.getBlock(receipt.blockNumber);
  
        // Extract relevant details
        const transactionDetails = {
          panCard,
          name,
          income: formData.income, // Pass this as a prop or fetch from the form data
          tax,
          timestamp: new Date(block.timestamp * 1000).toISOString(), // Convert UNIX timestamp to readable format
          blockHash: receipt.blockHash, // Block hash
          transactionHash: transaction.hash, // Transaction hash
        };
  
        console.log('Transaction Details:', transactionDetails);
  
        alert(
          `Transaction Successful!\nMined On: ${transactionDetails.timestamp}\nBlock Hash: ${transactionDetails.blockHash}`
        );
  
        // Call onSubmit callback with form data
        onSubmit([name, panCard, tax.toString()]);
      } else {
        alert('MetaMask is not installed. Please install MetaMask to proceed.');
      }
    } catch (error) {
      console.error('Error during transaction:', error);
      alert('Transaction failed. Please try again.');
    }
  };
  

  return (
    <div>
      <h2>Pay Your Taxes</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>PAN Card:</strong> {panCard}</p>
      <p><strong>Tax Amount (INR):</strong> {tax}</p>
      <button
  onClick={proceedToPay}
  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
>
  Proceed to Pay
</button>

    </div>
  );
}