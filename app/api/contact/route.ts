import type { NextRequest } from "next/server";
import Contact from "@/models/Contact";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  await connectToDatabase();

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
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

    const newContact = new Contact({
      firstName,
      lastName,
      contact,
      email,
      subject,
      description,
    });

    await newContact.save();

    return new Response(
      JSON.stringify({ message: "Your query submitted successfully!" }),
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
