import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const authToken = cookies().get("auth_token")?.value; // Check for the authentication token
  console.log("Auth token: ", authToken);
  // Allow requests for static files and public assets
  if (
    request.nextUrl.pathname.startsWith("/_next/") ||
    request.nextUrl.pathname.startsWith("/static/") ||
    request.nextUrl.pathname.startsWith("/images/") ||
    request.nextUrl.pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  // Redirect to the root page if authenticated and trying to access signin or signup pages
  if (
    authToken &&
    (request.nextUrl.pathname === "/auth/signin" ||
      request.nextUrl.pathname === "/auth/signup")
  ) {
    return NextResponse.redirect(new URL("/", request.url)); // Redirect to root if authenticated
  }

  // If not authenticated and trying to access protected routes, redirect to signin page
  if (
    !authToken &&
    request.nextUrl.pathname !== "/auth/signin" &&
    request.nextUrl.pathname !== "/auth/signup"
  ) {
    console.log("Redirecting to signin");
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  // If authenticated or accessing signin/signup pages, allow to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/auth/signin", "/auth/signup", "/:path*"], // Apply the middleware to all routes
};
