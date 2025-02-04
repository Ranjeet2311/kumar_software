import { connectToDatabase } from "@/lib/mongodb";
import NewIssue from "@/models/NewIssue";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

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

    // console.log(`authCookie in get : `, authCookie);

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
    console.log(`get route all issues : `, decodedToken);

    if (decodedToken?.user.position !== "admin") {
      const issuesByUser = await NewIssue.find({
        userId: new mongoose.Types.ObjectId(userId),
      });
      return new Response(
        JSON.stringify({
          message: "All user issues fetched successfully",
          data: issuesByUser,
        }),
        { status: 200 }
      );
    } else {
      const allIssues = await NewIssue.find({});
      return new Response(
        JSON.stringify({
          message: "All admin issues fetched successfully",
          data: allIssues,
        }),
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(`error : `, error);
    return new Response(
      JSON.stringify({
        message: "Internal server error, couldn't fetch issues created by user",
      }),
      { status: 500 }
    );
  }
}
