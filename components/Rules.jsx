import React from 'react';

export default function RulesAndRegulations() {
  return (
    <div className="section active form-section overflow-y-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-center space-x-4">
      <div className="flex flex-col items-center">
        <img 
          src="/main2.jpg" 
          alt="Indian" 
          className="w-60 h-60 object-cover rounded-lg shadow-md" 
          loading="lazy" 
        />
        <p className="text-center mt-2 leading-relaxed font-bold">
        India’s Prime Minister - Shri Narendra Modi
        </p>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img 
          src="/main3.jpg" 
          alt="Indian" 
          className="w-60 h-60 object-cover rounded-lg shadow-md" 
          loading="lazy" 
        />
        <p className="text-center mt-2 leading-relaxed font-bold">
          Minister of Finance - Smt. Nirmala Sitharaman
        </p>
      </div>
    </div>

      
      {/* MetaMask Guide Section */}
      <div className="mb-6">
        <h4 className="text-lg font-bold text-blue-800">MetaMask: Setting Up and Using the Wallet</h4>
        <p className="text-justify leading-relaxed mb-4">
          MetaMask is a popular cryptocurrency wallet that allows users to manage digital assets and interact with decentralized applications (dApps) on the Ethereum blockchain and other compatible networks. Here's a concise guide to setting up and using MetaMask:
        </p>
        <ol className="list-decimal pl-6 leading-relaxed">
          <li>
            <strong>Installation:</strong>
            <ul className="list-disc pl-6">
              <li>Browser Extension: Visit the official MetaMask website and download the extension compatible with your browser (Chrome, Firefox, Brave, or Edge).</li>
              <li>Mobile App: For mobile devices, download the MetaMask app from the App Store or Google Play Store.</li>
            </ul>
          </li>
          <li>
            <strong>Creating a Wallet:</strong>
            <ul className="list-disc pl-6">
              <li>Launch MetaMask: Open the extension or app and click "Get Started."</li>
              <li>
                Set Up a New Wallet: Choose "Create a Wallet," set a strong password, and securely back up your Secret Recovery Phrase. This phrase is crucial for recovering your wallet if you forget your password or need to restore it on a different device.
              </li>
            </ul>
          </li>
          <li>
            <strong>Adding Funds:</strong>
            <ul className="list-disc pl-6">
              <li>
                Receive Tokens: Click "Receive" to view your wallet address. Share this address to receive cryptocurrency from another wallet or exchange.
              </li>
              <li>
                Buy Tokens: MetaMask offers options to purchase cryptocurrency directly through the app using payment methods like credit/debit cards or bank transfers.
              </li>
            </ul>
          </li>
          <li>
            <strong>Managing Assets:</strong>
            <ul className="list-disc pl-6">
              <li>
                View Balances: Your assets will appear on the main screen. If a token isn't displayed, you can add it manually by clicking "Import Tokens" and entering the token's contract address.
              </li>
              <li>
                Send Tokens: To send tokens, click "Send," enter the recipient's address, specify the amount, and confirm the transaction. Ensure you have enough ETH or the native token of the network to cover gas fees.
              </li>
            </ul>
          </li>
          <li>
            <strong>Connecting to dApps:</strong>
            <ul className="list-disc pl-6">
              <li>Access dApps: Navigate to a dApp's website. You'll typically see a "Connect Wallet" option.</li>
              <li>
                Authorize Connection: Select MetaMask and approve the connection. This allows the dApp to interact with your wallet for transactions and other operations.
              </li>
            </ul>
          </li>
        </ol>
      </div>

      {/* YouTube Video Section */}
      <div className="mb-6">
        <h4 className="text-lg font-bold text-blue-800">Video Guide: Setting Up MetaMask</h4>
        <div className="flex justify-center items-center mb-6">
        <iframe
          className="rounded-lg shadow-md"
          width="560" 
          height="315"
          src="https://www.youtube.com/embed/yWfZnjkhhhg"
          title="MetaMask Setup Guide"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

        <p className="text-gray-600 text-sm mt-2 text-center">
          Watch this video to learn how to set up and use MetaMask step-by-step.
        </p>
      </div>
      <h3 className="text-2xl font-bold mb-4">Rules & Regulations</h3>
      {/* Taxation Overview Section */}
      <p className="text-justify leading-relaxed mb-4">
        <strong>Overview of the Indian Taxation System</strong>
        <br />
        India’s tax structure comprises <strong>Direct</strong> and <strong>Indirect Taxes</strong> to support public services, infrastructure, and development initiatives.
      </p>

      {/* Direct Taxes Section */}
      <div className="mb-4">
        <h4 className="text-lg font-bold text-blue-800">1. Direct Taxes</h4>
        <ul className="list-disc pl-6 leading-relaxed">
          <li>
            <strong>Income Tax:</strong> Applied on the income of individuals, Hindu Undivided Families (HUFs), firms, and corporations. It follows a progressive tax rate for individuals based on income slabs.
          </li>
          <li>
            <strong>Corporate Tax:</strong> Imposed on the profits of domestic and foreign companies in India. Domestic companies are taxed on their global income, while foreign companies are taxed on income generated within India.
          </li>
        </ul>
      </div>

      {/* Indirect Taxes Section */}
      <div className="mb-4">
        <h4 className="text-lg font-bold text-blue-800">2. Indirect Taxes</h4>
        <ul className="list-disc pl-6 leading-relaxed">
          <li>
            <strong>Goods and Services Tax (GST):</strong> A nationwide tax system that unifies indirect taxes under one framework, replacing taxes like VAT and excise duty.
          </li>
          <li>
            <strong>Customs Duty:</strong> Levied on goods imported into India to regulate trade and protect domestic industries.
          </li>
        </ul>
      </div>

      {/* Key Rules and Regulations Section */}
      <div className="mb-4">
        <h4 className="text-lg font-bold text-blue-800">Key Rules and Regulations</h4>
        <ul className="list-disc pl-6 leading-relaxed">
          <li>
            <strong>Income Tax Act, 1961:</strong> Governs all aspects of income tax in India, including deductions, exemptions, and filing requirements.
          </li>
          <li>
            <strong>Annual Income Tax Filing:</strong> Individuals and companies must file annual returns, detailing income and deductions.
          </li>
          <li>
            <strong>Tax Deducted at Source (TDS):</strong> Tax collected at income generation points, such as salaries and rents, to prevent evasion.
          </li>
        </ul>
      </div>

      {/* Fiscal Year Note */}
      <p className="text-center font-bold mt-6">
        For the fiscal year 2024-25 (Assessment Year 2025-26), India's income tax structure offers two regimes: the Old Tax Regime and the New Tax Regime.
      </p>

      {/* Image with Caption */}
      <div className="text-center mt-6">
        <img 
          src="/main1.jpg" 
          alt="Indian Taxation Rules" 
          className="w-full max-w-lg mx-auto rounded-lg shadow-md" 
          loading="lazy" 
        />
        <p className="text-gray-600 text-sm mt-2">Figure: Overview of New Tax Slabs for 2024-2025</p>
      </div>
    </div>
  );
}
