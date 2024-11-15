import conn from '@/app/lib/conn';
import User from '@/app/models/user';

export async function GET(req) {
  await conn(); // Establish the database connection

  if (req.method !== 'GET') {
    return new Response(JSON.stringify({ success: false, message: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const users = await User.find().select('-password');

    return new Response(
      JSON.stringify({
        success: true,
        users,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error fetching users:', error);
    return new Response(JSON.stringify({ success: false, message: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
