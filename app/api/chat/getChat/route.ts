import { connectToDatabase } from "@/lib/mongodb";
import ChatModel from "@/models/Chat";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import ChatLastSeen from "@/models/ChatLastSeen";

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

    if (!userId) {
      return new Response(JSON.stringify({ message: "Invalid token" }), {
        status: 401,
      });
    }
    // Non-admin → only their chats
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
      const allChats = await ChatModel.find({}).sort({ updatedAt: -1 }).lean();
      // Get admin's last seen records
      const lastSeenRecords = await ChatLastSeen.find({ userId }).lean();
      const lastSeenMap = lastSeenRecords.reduce((map, rec) => {
        map[rec.chatId] = rec.lastSeenAt;
        return map;
      }, {} as Record<string, Date>);

      const result = allChats.map((chat) => {
        const lastSeenAt = lastSeenMap[chat.userId];
        let isNew = false;
        // ✅ Mark as new if never opened OR updated after last seen
        if (!lastSeenAt || new Date(chat.updatedAt) > new Date(lastSeenAt)) {
          isNew = true;
        }

        return { ...chat, isNew };
      });

      return new Response(
        JSON.stringify({
          message: "All admin messages fetched successfully",
          data: result,
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
