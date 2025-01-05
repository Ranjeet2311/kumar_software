import { NextRequest } from "next/server";
import Authentication from "@/models/Auth";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  await connectToDatabase();

  try {
    const { email, password } = await req.json();
    // console.log(`email : ${email}, Password:  ${password}`);
    console.log(`email : ${email}`);

    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "Email and password are required." }),
        {
          status: 400,
        }
      );
    }

    const user = await Authentication.findOne({ email });
    console.log(`user : ${user}`);

    if (!user || user.password !== password) {
      return new Response(JSON.stringify({ message: "Invalid credentials." }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ message: "Login successful", user }), {
      status: 200,
    });

    console.log(`user :: `, user);
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Error during authentication.",
        error,
      })
    );
  }
}
