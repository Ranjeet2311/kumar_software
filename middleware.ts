import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const authToken = req.cookies.get("authToken");

  console.log(`Middleware authToken ::: `, authToken?.value);

  if (!authToken?.value) {
    console.log("Middleware: No token found. Redirecting to /auth.");
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(authToken.value, secret);

    console.log("Middleware: Token verified successfully.", payload);
    return NextResponse.next();
  } catch (err) {
    console.error("Token verification failed:", err);
    return NextResponse.redirect(new URL("/auth", req.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
