// // src/app/api/auth/login/route.ts
// import { NextResponse } from 'next/server';
// import { SignJWT } from 'jose';
// import { cookies } from 'next/headers';
// import dbConnect from '@/lib/mongodb';
// import { Admin } from '@/models/admin';

// export const runtime = 'nodejs';

// export async function POST(request: Request) {
//   try {
//     await dbConnect();
//     const { email, password } = await request.json();

//     const admin = await Admin.findOne({ email }).exec();
    
//     if (!admin || !await admin.comparePassword(password)) {
//       return NextResponse.json(
//         { error: 'Invalid credentials' },
//         { status: 401 }
//       );
//     }

//     const secret = new TextEncoder().encode(process.env.JWT_SECRET);
//     const token = await new SignJWT({ 
//       userId: admin._id.toString(),
//       role: admin.role,
//       email: admin.email 
//     })
//       .setProtectedHeader({ alg: 'HS256' })
//       .setIssuedAt()
//       .setExpirationTime('24h')
//       .sign(secret);

//     cookies().set('auth-token', token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'lax',
//       maxAge: 86400 // 1 day
//     });

//     return NextResponse.json({
//       success: true,
//       user: {
//         id: admin._id.toString(),
//         email: admin.email,
//         role: admin.role,
//         name: admin.name
//       }
//     });
//   } catch (error) {
//     console.error('Login error:', error);
//     return NextResponse.json(
//       { error: 'Authentication failed' },
//       { status: 500 }
//     );
//   }
// }



// src/app/api/auth/login/route.ts

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Admin } from '@/models/admin';
import { createToken, setAuthCookie } from '../../../../../utils/auth';
import type { AdminJWTPayload } from '../../../../../types/admin';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { email, password } = await request.json();

    const admin = await Admin.findOne({ email }).select('+password').exec();
    
    if (!admin || !await admin.comparePassword(password)) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const userData: AdminJWTPayload = {
      userId: admin._id.toString(),
      role: admin.role,
      email: admin.email,
      name: admin.name
    };

    const token = await createToken(userData);
    setAuthCookie(token);

    return NextResponse.json({
      success: true,
      user: userData
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}