import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import ContactModel from "@/models/Contact";

type User = {
  email: string;
  firstName: string;
  lastName: string;
  userId: string;
  position: string;
};

interface DecodedToken {
  exp: string;
  iat: string;
  user: User;
}

export async function GET(req: NextRequest) {
  await connectToDatabase();

  try {
    const cookiesInstance = await cookies();
    const authCookie = await cookiesInstance.get("authToken");
    console.log(`authCookie in get chat route: `, authCookie);

    if (!authCookie) {
      return new Response(
        JSON.stringify({
          message: "Unauthorized user, couldn't fetch the issues",
        }),
        { status: 401 }
      );
    }
    const decodedToken = jwt.decode(authCookie?.value) as DecodedToken | null;
    const userId = decodedToken?.user?.userId;

    if (!userId || decodedToken?.user.position !== "admin") {
      return new Response(JSON.stringify({ message: "Invalid token" }), {
        status: 401,
      });
    }

    const allQueries = await ContactModel.find({})
      .sort({ updatedAt: -1 })
      .lean();

    return new Response(
      JSON.stringify({
        message: "All queries fetched successfully",
        data: allQueries,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(`Error`);
  }
}
