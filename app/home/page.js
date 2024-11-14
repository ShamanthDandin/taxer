"use client"
import { useState } from 'react';
import RulesAndRegulations from '@/components/Content/Rules';
import PayeeDetails from '@/components/Content/PayeeDetails';
import IncomeDetails from '@/components/Content/IncomeDetails';
import Deductions from '@/components/Content/Deduction';
import PayTaxes from '@/components/Content/PayTaxes';
import AgeGroup from '@/components/Content/AgeGroup';
import TaxDistribution from '@/components/Content/TaxDist';

export default function HomePage() {
  const [activeComponent, setActiveComponent] = useState('rules');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'rules':
        return <RulesAndRegulations />;
      case 'payeeDetails':
        return <PayeeDetails />;
      case 'income':
        return <IncomeDetails />;
      case 'deductions':
        return <Deductions />;
      case 'ageGroup':
        return <AgeGroup />;
      case 'payTaxes':
        return <PayTaxes />;
      case 'taxDistribution':
        return <TaxDistribution /> 
      default:
        return <RulesAndRegulations />;
    }
  };

  return (
    <div className='p-2'>
      <nav className="bg-gray-800 text-white p-6 rounded-2xl shadow-md mb-4">
  <ul className="flex justify-center space-x-8 text-sm">
    <li className="cursor-pointer hover:bg-gray-700 px-4 py-2 rounded transition duration-200" onClick={() => setActiveComponent('rules')}>Rules & Regulations</li>
    <li className="cursor-pointer hover:bg-gray-700 px-4 py-2 rounded transition duration-200" onClick={() => setActiveComponent('payeeDetails')}>Payee Details</li>
    <li className="cursor-pointer hover:bg-gray-700 px-4 py-2 rounded transition duration-200" onClick={() => setActiveComponent('income')}>Income Details</li>
    <li className="cursor-pointer hover:bg-gray-700 px-4 py-2 rounded transition duration-200" onClick={() => setActiveComponent('deductions')}>Deductions</li>
    <li className="cursor-pointer hover:bg-gray-700 px-4 py-2 rounded transition duration-200" onClick={() => setActiveComponent('ageGroup')}>Age Group</li>
    <li className="cursor-pointer hover:bg-gray-700 px-4 py-2 rounded transition duration-200" onClick={() => setActiveComponent('payTaxes')}>Pay Your Taxes</li>
    <li className="cursor-pointer hover:bg-gray-700 px-4 py-2 rounded transition duration-200" onClick={() => setActiveComponent('taxDistribution')}>Tax Distribution</li>
    <li className="cursor-pointer hover:bg-red-600 px-4 py-2 rounded transition duration-200" onClick={() => alert("Logging out...")}>Logout</li>
  </ul>
</nav>
<div className="flex-grow p-4 w-full flex items-center justify-center">
  {renderComponent()}
</div>
    </div>
  );
}


