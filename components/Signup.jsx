
import { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  
    if (!formData.email || !formData.password) {
      setMessage("Please fill in both email and password.");
      return;
    }
    try {
      console.log("Attempting to sign up...");
      const response = await axios.post('/api/signup', formData);
      setMessage(response.data.message);
      alert(response.data.message);
      // Redirect or set authentication state here
    } catch (error) {
      console.error("Error in signup:", error);
      
     
      if (error.response) {
        setMessage(error.response.data.message);
      } else if (error.request) {
      
        setMessage("No response from the server. Please try again later.");
      } else {
     
        setMessage("An unexpected error occurred. Please try again.");
      }
    }
  };
  
  

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 mb-4 border rounded"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-3 mb-4 border rounded"
      />
      <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded">
        Sign Up
      </button>
      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    </form>
  );
};

export default SignupForm;
