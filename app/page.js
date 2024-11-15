"use client"
import { useState } from 'react';
import SignupForm from '../components/Signup';
import SigninForm from '../components/Signin';

export default function Home() {
  const [isSignup, setIsSignup] = useState(false); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-8">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Blockchain-Based Tax Calculator and Government Fund Allocation & Tracking Prototype
        </h2>
      </div>

 
      <div className="p-6 bg-white rounded-lg shadow-md max-w-md w-full">
        
      {isSignup ? <SignupForm /> : <SigninForm />}
        <div className="flex justify-between mb-6 mt-6">
          <button
            onClick={() => setIsSignup(false)}
            className={`px-4 py-2 font-semibold rounded ${!isSignup ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsSignup(true)}
            className={`px-4 py-2 font-semibold rounded ${isSignup ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Sign Up
          </button>
        </div>
        
      
        
      </div>
    </div>
  );
}
//payee details store username and pancard number
//income details idk
// deduction