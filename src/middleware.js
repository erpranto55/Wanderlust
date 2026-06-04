import { NextResponse } from "next/server";

/**
 * Next.js Middleware — runs in the Edge runtime.
 * IMPORTANT: Do NOT import `next/headers`, `mongodb`, or any Node.js-only
 * module here. Edge runtime does not support them and will fail the build.
 *
 * Better Auth writes a session cookie on login. We check for its presence
 * to decide whether to allow or redirect the request.
 */
export function middleware(request) {
    // Better Auth cookie name differs by protocol:
    //   HTTP  → "better-auth.session_token"
    //   HTTPS → "__Secure-better-auth.session_token"
    const sessionCookie =
        request.cookies.get("better-auth.session_token") ||
        request.cookies.get("__Secure-better-auth.session_token");

    if (!sessionCookie) {
        const loginUrl = new URL("/login", request.url);
        // Preserve the original URL so we can redirect back after login
        loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/my-bookings",
        "/add-destination",
        "/profile",
        "/destination/:path+",
    ],
};
