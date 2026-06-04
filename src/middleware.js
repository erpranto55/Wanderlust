import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

// This function runs as Next.js middleware — file MUST be named middleware.js
export async function middleware(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/my-bookings",
    "/add-destination",
    "/profile",
    "/destination/:path+",
  ],
};
