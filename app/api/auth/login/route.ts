import { NextRequest, NextResponse } from "next/server";
import Authentication from "@/models/Auth";
import { connectToDatabase } from "@/lib/mongodb";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export async function POST(req: NextRequest) {
  await connectToDatabase();

  try {
    // Parse the request body
    const { email, password }: { email: string; password: string } =
      await req.json();
    // console.log(`Data from form=>   email : ${email}, Password:  ${password}`);

    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "Email and password are required." }),
        {
          status: 400,
        }
      );
    }
    // Find the user in the database
    const user = await Authentication.findOne({ email });
    // console.log(`user : ${user}`);
    const isPasswordMatch = await compare(password, user.password);

    // console.log(`isPasswordMatch :: `, isPasswordMatch);

    if (!user || !isPasswordMatch) {
      return new Response(JSON.stringify({ message: "Invalid credentials." }), {
        status: 404,
      });
    }

    // Generate a JWT token

    type UserType = {
      firstName: string;
      lasrName: string;
      email: string;
    };

    const userInfo: UserType = {
      firstName: user.firstName,
      lasrName: user.lastName,
      email: user.email,
    };

    const token = sign(
      {
        user: userInfo,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    // Set the token as an HTTP-only cookie
    const response = new NextResponse(
      JSON.stringify({ message: "Login successful" }),
      { status: 200 }
    );

    response.cookies.set("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure only in production
      path: "/",
      maxAge: 60 * 60 * 72, // 3 days
    });

    return response;
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Error during authentication.",
        error: (error as Error).message,
      }),
      { status: 500 }
    );
  }
}
