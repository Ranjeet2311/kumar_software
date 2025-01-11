import { NextRequest } from "next/server";
import Authentication from "@/models/Auth";
import { connectToDatabase } from "@/lib/mongodb";
import { genSalt, hash } from "bcrypt";

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

    // Hash the password before saving

    const salt = await genSalt(12); // Generate a salt
    const hashPassword = await hash(password, salt);

    const newUser = new Authentication({
      firstName: firstName,
      lastName: lastName,
      contact: contact,
      email: email,
      password: hashPassword,
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
