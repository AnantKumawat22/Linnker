import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

export default function middleware(req) {
  const { cookies } = req;
  const jwt = cookies.token;
  const url = req.url;

  // - Want to access login page
  if (url.includes('/login')) {
    if (jwt) {
      try {
        verify(jwt, process.env.JWT_SECRET);
        return NextResponse.redirect('/');
      } catch (err) {
        return NextResponse.next();
      }
    }
  }

  // - Want to access dashboard page
  if (url.includes('/dashboard')) {
    if (jwt === undefined) return NextResponse.redirect('/login');
    try {
      verify(jwt, process.env.JWT_SECRET);
      return NextResponse.next();
    } catch (err) {
      return NextResponse.redirect('/login');
    }
  }
  return NextResponse.next();
}
