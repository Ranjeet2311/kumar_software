import type { NextRequest } from "next/server";
import ContactModel from "@/models/Contact";
import { connectToDatabase } from "@/lib/mongodb";
import {
  getContactLimiter,
  RateLimiterRes,
  CONTACT_POINTS,
} from "@/lib/rateLimit";

export async function POST(req: NextRequest) {
  await connectToDatabase();

  // --- RATE LIMITER ---
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown"; // fallback
  const limiter = getContactLimiter();

  try {
    await limiter.consume(ip);
  } catch (rej) {
    const r = rej as RateLimiterRes;
    const retryAfter = Math.ceil((r.msBeforeNext || 1000) / 1000);

    return new Response(
      JSON.stringify({ message: "Too many requests. Please try again later" }),
      {
        status: 429,
        headers: {
          "Retry-After": String(retryAfter),
          "X-RateLimit-Limit": String(CONTACT_POINTS),
          "X-RateLimit-Remaining": String(Math.max(0, r.remainingPoints ?? 0)),
          "X-RateLimit-Reset": String(retryAfter),
          "Content-Type": "application/json",
        },
      }
    );
  }

  // --- FORM LOGIC ---

  try {
    const body = await req.json();
    const { firstName, lastName, contact, email, subject, description } = body;

    if (
      !firstName ||
      !lastName ||
      !contact ||
      !email ||
      !subject ||
      !description
    ) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    const newContact = new ContactModel({
      firstName,
      lastName,
      contact,
      email,
      subject,
      description,
    });

    await newContact.save();

    return new Response(
      JSON.stringify({ message: "Your query was submitted successfully" }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Internal server error, couldn't submit the form",
        error,
      }),
      { status: 500 }
    );
  }
}
