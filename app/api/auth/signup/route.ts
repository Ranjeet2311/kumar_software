import { NextRequest } from "next/server";
import Contact from "@/models/Contact";
import Authentication from "@/models/Auth";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  await connectToDatabase();

  try {
    const body = await req.json();
    const { firstName, lastName, contact, email, subject, password } = body;

    if (!firstName || !lastName || !contact || !email || !password) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

    const newUser = new Authentication({
      firstName,
      lastName,
      contact,
      email,
      password,
    });

    await newUser.save();

    return new Response(JSON.stringify({ message: "Sign up successfull!" }), {
      status: 201,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Internal server error, couldn't signup",
        error,
      }),
      { status: 500 }
    );
  }
}
