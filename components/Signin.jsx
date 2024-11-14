import { useState } from 'react';
import axios from 'axios';

const SigninForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log("in auth signin")
      const response = await axios.post('/api/signin', formData);
      setMessage(response.data.message);
      alert(response.data.message);
      // Redirect or set authentication state here
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
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
        Sign In
      </button>
      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    </form>
  );
};

export default SigninForm;