import conn from '@/app/lib/conn';
import Transaction from '@/app/models/Transaction';

export async function POST(req) {
  await conn(); 

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ success: false, message: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const {
      panCard,
      name,
      income,
      tax,
      timestamp,
      blockHash,
      transactionHash,
    } = await req.json();

    if (!panCard || !name || !income || !tax || !timestamp || !blockHash || !transactionHash) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'All fields are required',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const transaction = new Transaction({
      panCard,
      name,
      income,
      tax,
      timestamp,
      blockHash,
      transactionHash,
    });
    await transaction.save();

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Transaction saved successfully',
      }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error saving transaction:', error);
    return new Response(JSON.stringify({ success: false, message: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
