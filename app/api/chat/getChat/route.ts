import { connectToDatabase } from "@/lib/mongodb";
import ChatModel from "@/models/Chat";
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
    // console.log(`get route all issues : `, decodedToken);

    if (decodedToken?.user.position !== "admin") {
      const chatByUser = await ChatModel.find({
        userId: userId,
      });
      // console.log(`chatByUser : `, chatByUser);

      return new Response(
        JSON.stringify({
          message: "All user messages fetched successfully",
          data: chatByUser,
        }),
        { status: 200 }
      );
    } else {
      const allChats = await ChatModel.find({});
      // console.log(`allChats :: `, allChats);

      return new Response(
        JSON.stringify({
          message: "All admin messages fetched successfully",
          data: allChats,
        }),
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(`error : `, error);
    return new Response(
      JSON.stringify({
        message:
          "Internal server error, couldn't fetch chat messages created by user",
      }),
      { status: 500 }
    );
  }
}
