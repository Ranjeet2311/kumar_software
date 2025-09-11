import { NextRequest } from "next/server";
import Authentication from "@/models/Auth";
import { connectToDatabase } from "@/lib/mongodb";
import { genSalt, hash } from "bcrypt";
import { getSignupLimiter, RateLimiterRes } from "@/lib/rateLimit";

export async function POST(req: NextRequest) {
  await connectToDatabase();

  const limiter = getSignupLimiter();
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown"; // fallback

  try {
    await limiter.consume(ip);
  } catch (rej) {
    const r = rej as RateLimiterRes;
    const retryAfter = Math.ceil((r.msBeforeNext || 1000) / 1000);
    return new Response(
      JSON.stringify({
        message: "Too many attempts. Try again later",
      }),
      {
        status: 429,
        headers: {
          "Retry-After": String(retryAfter),
          "Content-Type": "application/json",
        },
      }
    );
  }

  // ----- FORM LOGIC -----

  try {
    const body = await req.json();
    const { firstName, lastName, contact, email, password } = body;

    if (!firstName || !lastName || !contact || !email || !password) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    const existingUser = await Authentication.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "User already exists with this email" }),
        { status: 409 }
      );
    }

    // Ensure contact is stored as a string
    const formattedContact = String(contact);

    // Hash the password before saving
    const salt = await genSalt(12);
    const hashPassword = await hash(password, salt);

    const newUser = new Authentication({
      firstName: firstName,
      lastName: lastName,
      contact: contact,
      email: normalizedEmail,
      password: hashPassword,
      position: "user",
    });

    await newUser.save();

    return new Response(JSON.stringify({ message: "Sign up successful" }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error Sign up:", error);
    return new Response(
      JSON.stringify({
        message: "Internal server error, couldn't sign up",
        error,
      }),
      { status: 500 }
    );
  }
}
