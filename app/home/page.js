"use client";
import { useState, useEffect } from 'react';
import RulesAndRegulations from '@/components/Rules';
import PayeeDetails from '@/components/Form/PayeeDetails';
import IncomeDetails from '@/components/Form/IncomeDetails';
import Deductions from '@/components/Form/Deduction';
import PayTaxes from '@/components/Form/PayTaxes';
import AgeGroup from '@/components/Form/AgeGroup';
import TaxDistribution from '@/components/TaxDist';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import AdminComponent from '@/components/Admin';
import Form from '@/components/Form';


export default function HomePage() {
  const [activeComponent, setActiveComponent] = useState('rules');
  const [role, setRole] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
        try {
            const email = localStorage.getItem('userEmail');
            if (!email) {
                setLoading(false);
                return;
            }
            const response = await axios.post('/api/fetch', { email });
            const { success, user } = response.data;

            if (success && user) {
                setRole(user.role);
                setUsers([user]); 
            }

            setLoading(false);
            console.log(response.data);
        } catch (error) {
            setLoading(false);
        }
    };

    fetchData();
}, []);

if (loading) {
    return <div>Loading...</div>;
}



  const renderComponent = () => {
    switch (activeComponent) {
      case 'rules':
        return <RulesAndRegulations />;
      case 'form':
        return <Form />;
      case 'income':
        return <IncomeDetails />;
      case 'deductions':
        return <Deductions />;
      case 'ageGroup':
        return <AgeGroup />;
      case 'payTaxes':
        return <PayTaxes />;
      case 'taxDistribution':
        return <TaxDistribution />;
      case 'adminDashboard': 
        return <AdminComponent />
      default:
        return <RulesAndRegulations />;
    }
  };

  const renderNav = () => (
    <ul className="flex justify-center space-x-8 text-sm">
      <li
        className="cursor-pointer hover:bg-gray-700 px-4 py-2 rounded transition duration-200"
        onClick={() => setActiveComponent('rules')}
      >
        Rules & Regulations
      </li>
      {role === 'admin' && role != "" && (
        <li
          className="cursor-pointer hover:bg-gray-700 px-4 py-2 rounded transition duration-200"
          onClick={() => setActiveComponent('adminDashboard')}
        >
          Admin Dashboard
        </li>
      )}
      <li
        className="cursor-pointer hover:bg-gray-700 px-4 py-2 rounded transition duration-200"
        onClick={() => setActiveComponent('form')}
      >
        Calculate Tax
      </li>
      {/* <li
        className="cursor-pointer hover:bg-gray-700 px-4 py-2 rounded transition duration-200"
        onClick={() => setActiveComponent('income')}
      >
        Income Details
      </li>
      <li
        className="cursor-pointer hover:bg-gray-700 px-4 py-2 rounded transition duration-200"
        onClick={() => setActiveComponent('deductions')}
      >
        Deductions
      </li>
      <li
        className="cursor-pointer hover:bg-gray-700 px-4 py-2 rounded transition duration-200"
        onClick={() => setActiveComponent('ageGroup')}
      >
        Age Group
      </li>
      <li
        className="cursor-pointer hover:bg-gray-700 px-4 py-2 rounded transition duration-200"
        onClick={() => setActiveComponent('payTaxes')}
      >
        Pay Your Taxes
      </li> */}
      <li
        className="cursor-pointer hover:bg-gray-700 px-4 py-2 rounded transition duration-200"
        onClick={() => setActiveComponent('taxDistribution')}
      >
        Tax Distribution
      </li>
      <li
        className="cursor-pointer hover:bg-red-600 px-4 py-2 rounded transition duration-200"
        onClick={() => {
          alert('Logging out...')
          router.push('/')
        } 
        }
      >
        Logout
      </li>
    </ul>
  );

  return (
    <div className="p-2">
      <nav className="bg-gray-800 text-white p-6 rounded-2xl shadow-md mb-4">{renderNav()}</nav>
      <div className="flex-grow p-4 w-full flex items-center justify-center">{renderComponent()}</div>
    </div>
  );
}
