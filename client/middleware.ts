import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // Skip auth check during development to avoid fetch issues
  if (process.env.NODE_ENV === 'development') {
    console.log("Development mode - skipping auth check");
    return NextResponse.next();
  }

  try {
    const sessionToken = request.cookies.get("better-auth.session_token")?.value;

    if (!sessionToken) {
      // Redirect to signin if no session is found
      return NextResponse.redirect(new URL("/auth/signin", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
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