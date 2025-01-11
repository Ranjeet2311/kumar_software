import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const response = new NextResponse(
    JSON.stringify({ message: "Logged out successfully" }),
    { status: 200 }
  );

  response.cookies.set("authToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0, // Immediately expire the cookie
  });

  return response;
}
