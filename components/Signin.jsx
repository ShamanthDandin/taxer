import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const SigninForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const router = useRouter()
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        console.log("in auth signin");
        const response = await axios.post('/api/signin', formData);
        setMessage(response.data.message);
        alert(response.data.message);

        // Ensure email is valid before proceeding
        if (formData.email && typeof formData.email === 'string') {
            // Store email in localStorage
            localStorage.setItem('userEmail', formData.email);

            // Redirect to /home
            router.push('/home');
        } else {
            throw new Error("Invalid email format");
        }
    } catch (error) {
        setMessage(error.response?.data?.message || "An error occurred.");
        console.error("Error during sign-in:", error);
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
