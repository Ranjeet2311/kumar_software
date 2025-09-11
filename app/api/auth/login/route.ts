import { NextRequest, NextResponse } from "next/server";
import Authentication from "@/models/Auth";
import { connectToDatabase } from "@/lib/mongodb";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { getLoginLimiter, RateLimiterRes, LOGIN_POINTS } from "@/lib/rateLimit";

function getClientIp(req: NextRequest): string {
  // Try forwarded header (works on Netlify/Vercel/Proxies)
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0].trim();
  // Fallback: not always available in Edge/Serverless
  // @ts-expect-error - not in Next type yet
  return req.ip || "unknown";
}

export async function POST(req: NextRequest) {
  await connectToDatabase();
  const key = `login:${getClientIp(req)}`;
  const limiter = getLoginLimiter();

  try {
    const usage = await limiter.consume(key);

    // Add rate headers
    const rateHeaders = {
      "X-RateLimit-Limit": String(LOGIN_POINTS),
      "X-RateLimit-Remaining": String(Math.max(0, usage.remainingPoints)),
      "X-RateLimit-Reset": String(Math.ceil(usage.msBeforeNext / 1000)),
    };

    // ---- Normal login flow

    const { email, password }: { email: string; password: string } =
      await req.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "Email and password are required" }),
        {
          status: 400,
        }
      );
    }
    const normalizedEmail = email.toLowerCase().trim();
    const user = await Authentication.findOne({ email: normalizedEmail });

    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid credentials" }),
        {
          status: 404,
          headers: { ...rateHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const isPasswordMatch = await compare(password, user.password);

    if (!isPasswordMatch) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid credentials" }),
        { status: 404 }
      );
    }
    // Generate a JWT token

    type UserType = {
      userId: string;
      firstName: string;
      lastName: string;
      email: string;
      position: string | "";
    };

    const userInfo: UserType = {
      userId: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      position: user.position,
    };

    const token = sign(
      {
        user: userInfo,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "3d" }
    );

    const response = new NextResponse(
      JSON.stringify({ message: "Login successful" }),
      { status: 200 }
    );

    // Set the token as an HTTP-only cookie
    response.cookies.set("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure only in production
      path: "/",
      maxAge: 60 * 60 * 72, // 3 days
    });

    return response;
  } catch (error) {
    // Throttled
    const r = error as RateLimiterRes;
    const retryAfter = Math.ceil((r.msBeforeNext || 1000) / 1000);

    return new Response(
      JSON.stringify({ message: "Too many attempts. Try again later" }),
      {
        status: 429,
        headers: {
          "Retry-After": String(retryAfter),
          "X-RateLimit-Limit": String(LOGIN_POINTS),
          "X-RateLimit-Remaining": String(Math.max(0, r.remainingPoints ?? 0)),
          "X-RateLimit-Reset": String(retryAfter),
          "Content-Type": "application/json",
        },
      }
    );
  }
}
