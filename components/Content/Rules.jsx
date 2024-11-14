import React from 'react';

export default function RulesAndRegulations() {
  return (
    <div className="section active form-section  overflow-y-auto p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">Rules & Regulations</h3>
      
      <p className="text-justify leading-relaxed mb-4">
        <strong>Overview of the Indian Taxation System</strong>
        <br />
        India’s tax structure comprises <strong>Direct</strong> and <strong>Indirect Taxes</strong> to support public services, infrastructure, and development initiatives.
      </p>
      
      {/* Direct Taxes Section */}
      <div className="mb-4">
        <h4 className="text-lg font-bold text-blue-800">1. Direct Taxes</h4>
        <ul className="list-disc pl-6 leading-relaxed">
          <li><strong>Income Tax</strong>: Applied on the income of individuals, Hindu Undivided Families (HUFs), firms, and corporations. It follows a progressive tax rate for individuals based on income slabs.</li>
          <li><strong>Corporate Tax</strong>: Imposed on the profits of domestic and foreign companies in India. Domestic companies are taxed on their global income, while foreign companies are taxed on income generated within India.</li>
        </ul>
      </div>
      
      {/* Indirect Taxes Section */}
      <div className="mb-4">
        <h4 className="text-lg font-bold text-blue-800">2. Indirect Taxes</h4>
        <ul className="list-disc pl-6 leading-relaxed">
          <li><strong>Goods and Services Tax (GST)</strong>: A nationwide tax system that unifies indirect taxes under one framework, replacing taxes like VAT and excise duty.</li>
          <li><strong>Customs Duty</strong>: Levied on goods imported into India to regulate trade and protect domestic industries.</li>
        </ul>
      </div>
      
      {/* Key Rules and Regulations Section */}
      <div className="mb-4">
        <h4 className="text-lg font-bold text-blue-800">Key Rules and Regulations</h4>
        <ul className="list-disc pl-6 leading-relaxed">
          <li><strong>Income Tax Act, 1961</strong>: Governs all aspects of income tax in India, including deductions, exemptions, and filing requirements.</li>
          <li><strong>Annual Income Tax Filing</strong>: Individuals and companies must file annual returns, detailing income and deductions.</li>
          <li><strong>Tax Deducted at Source (TDS)</strong>: Tax collected at income generation points, such as salaries and rents, to prevent evasion.</li>
        </ul>
      </div>
      
      {/* Fiscal Year Note */}
      <p className="text-center font-bold mt-6">
        For the fiscal year 2024-25 (Assessment Year 2025-26), India's income tax structure offers two regimes: the Old Tax Regime and the New Tax Regime.
      </p>
      
      {/* Image with Caption */}
      <div className="text-center mt-6">
        <img 
          src="C:\Users\Bhoomika Nataraj\Desktop\major proj\new_tax_slabs-sixteen_nine.webp" 
          alt="Indian Taxation Rules" 
          className="w-full max-w-lg mx-auto rounded-lg shadow-md" 
          loading="lazy" 
        />
        <p className="text-gray-600 text-sm mt-2">Figure: Overview of New Tax Slabs for 2024-2025</p>
      </div>
    </div>
  );
}
