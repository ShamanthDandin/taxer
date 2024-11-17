import React, { useEffect, useState } from 'react';

const AdminComponent = () => {
    const [taxPayers, setTaxPayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch data from /api/trans
    const fetchData = async () => {
        try {
            const response = await fetch('/api/trans'); // Fetching from /api/trans
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            if (data.success) {
                setTaxPayers(data.data); // Set tax payers from the API response
            } else {
                throw new Error('Data fetch unsuccessful');
            }
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    // Fetch data when the component loads
    useEffect(() => {
        fetchData();
    }, []);

    // Helper function to truncate long strings
    const truncateString = (str, length = 10) => {
        if (str.length <= length) return str;
        return `${str.slice(0, 6)}...${str.slice(-6)}`; // First 6 and last 6 characters
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-blue-50 border border-blue-400 rounded-lg p-10 w-full max-w-5xl text-center shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                    Tax Payers (Blockchain Records)
                </h2>
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr>
                            <th className="px-6 py-4 bg-gray-600 text-white text-lg font-medium border border-gray-300">
                                PAN Card No.
                            </th>
                            <th className="px-6 py-4 bg-gray-600 text-white text-lg font-medium border border-gray-300">
                                Name
                            </th>
                            <th className="px-6 py-4 bg-gray-600 text-white text-lg font-medium border border-gray-300">
                                Income
                            </th>
                            <th className="px-6 py-4 bg-gray-600 text-white text-lg font-medium border border-gray-300">
                                Tax Paid
                            </th>
                            <th className="px-6 py-4 bg-gray-600 text-white text-lg font-medium border border-gray-300">
                                Timestamp
                            </th>
                            <th className="px-6 py-4 bg-gray-600 text-white text-lg font-medium border border-gray-300">
                                Block Hash
                            </th>
                            <th className="px-6 py-4 bg-gray-600 text-white text-lg font-medium border border-gray-300">
                                Transaction Hash
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {taxPayers.map((payer, index) => (
                            <tr key={index} className="hover:bg-gray-200 transition duration-200">
                                <td className="px-6 py-4 border border-gray-300">{payer.panCard}</td>
                                <td className="px-6 py-4 border border-gray-300">{payer.name}</td>
                                <td className="px-6 py-4 border border-gray-300">{payer.income.toLocaleString('en-IN')}</td>
                                <td className="px-6 py-4 border border-gray-300">{payer.tax.toLocaleString('en-IN')}</td>
                                <td className="px-6 py-4 border border-gray-300">{new Date(payer.timestamp).toLocaleString()}</td>
                                <td className="px-6 py-4 border border-gray-300">
                                    {truncateString(payer.blockHash, 16)}
                                </td>
                                <td className="px-6 py-4 border border-gray-300">
                                    {truncateString(payer.transactionHash, 16)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button
                    onClick={fetchData}
                    className="mt-8 px-8 py-4 bg-blue-600 text-white text-xl font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                >
                    Refresh Blockchain Data
                </button>
            </div>
        </div>
    );
};

export default AdminComponent;
