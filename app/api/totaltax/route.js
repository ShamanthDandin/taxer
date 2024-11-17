import conn from '@/app/lib/conn';
import Transaction from '@/app/models/Transaction';

export async function GET(req) {
  await conn();
  if (req.method !== 'GET') {
    return new Response(JSON.stringify({ success: false, message: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  try {
    // Fetch all transactions and select only the 'tax' field
    const transactions = await Transaction.find({}, 'tax');
    if (!transactions || transactions.length === 0) {
      return new Response(
        JSON.stringify({ success: false, message: 'No transactions found' }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Calculate the total amount of tax
    const totalTax = transactions.reduce((sum, transaction) => sum + transaction.tax, 0);

    // Return the total tax amount
    return new Response(
      JSON.stringify({ success: true, totalTax }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return new Response(JSON.stringify({ success: false, message: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
