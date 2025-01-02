// pages/api/auth/logout.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Clear the auth cookie
    res.setHeader('Set-Cookie', [
      'adminToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; HttpOnly',
      // Add any other cookies you need to clear
    ]);

    return res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    return res.status(500).json({ message: 'Error logging out' });
  }
}