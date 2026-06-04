import { NextResponse } from "next/server";

/**
 * Next.js 16 Proxy — the new name for what was "middleware.js" in older versions.
 * Runs in the Edge runtime. Do NOT import next/headers, mongodb, or any
 * Node.js-only module here — they are not available in the Edge runtime.
 *
 * Better Auth writes a session cookie on login. We check for its presence
 * to decide whether to allow or redirect the request.
 */
export async function proxy(request) {
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
