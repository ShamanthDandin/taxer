import conn from '../../../lib/conn';
import User from '../../../models/user';

export async function POST(req) {
  // Ensure connection to the database
  await conn();

  // Check if the method is POST; if not, respond with a 405 status
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ success: false, message: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Parse JSON from the request
  const { email, password } = await req.json();

  try {
    // Check if the user already exists in the 'users' collection
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ success: false, message: 'User already exists' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create a new user if no existing user is found
    const newUser = new User({ email, password });
    await newUser.save();  // MongoDB will create the 'users' collection if it doesn't exist

    return new Response(JSON.stringify({ success: true, message: 'User created successfully' }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Catch any errors during the process and respond with a 500 status
    console.error('Error in signup:', error);
    return new Response(JSON.stringify({ success: false, message: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
