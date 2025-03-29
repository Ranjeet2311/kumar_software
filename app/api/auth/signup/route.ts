import { NextRequest } from "next/server";
import Authentication from "@/models/Auth";
import { connectToDatabase } from "@/lib/mongodb";
import { genSalt, hash } from "bcrypt";

export async function POST(req: NextRequest) {
  await connectToDatabase();

  try {
    const body = await req.json();
    const { firstName, lastName, contact, email, password } = body;

    if (!firstName || !lastName || !contact || !email || !password) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

    // Ensure contact is stored as a string
    const formattedContact = String(contact);

    // Hash the password before saving

    const salt = await genSalt(12); // Generate a salt
    const hashPassword = await hash(password, salt);

    // console.log(`Creating new user`);

    const newUser = new Authentication({
      firstName: firstName,
      lastName: lastName,
      contact: contact,
      email: email,
      password: hashPassword,
      position: "user",
    });

    // console.log(`before saving user`);

    await newUser.save();

    // console.log(`Saved new user`);

    return new Response(JSON.stringify({ message: "Sign up successfull!" }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error Sign up:", error);
    return new Response(
      JSON.stringify({
        message: "Internal server error, couldn't signup",
        error,
      }),
      { status: 500 }
    );
  }
}
