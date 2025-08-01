import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  // Skip auth check during development to avoid fetch issues
  if (process.env.NODE_ENV === 'development') {
    console.log("Development mode - skipping auth check");
    return NextResponse.next();
  }

  try {
    // Use next-auth's getToken helper
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET
    });

    if (!token) {
      // Redirect to signin if no token is found
      return NextResponse.redirect(new URL("/auth/signin", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    // In case of error, allow the request to continue to avoid blocking the user
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/experience/:path*',
    '/experience',
    '/coexperiencer/:path*'
  ]
};