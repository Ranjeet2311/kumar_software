import { connectToDatabase } from "@/lib/mongodb";
import ChatLastSeen from "@/models/ChatLastSeen";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  await connectToDatabase();

  try {
    const { userId, chatId } = await req.json();
    if (!userId || !chatId) {
      return new Response(JSON.stringify({ message: "Missing fields" }), {
        status: 400,
      });
    }

    await ChatLastSeen.findOneAndUpdate(
      { userId, chatId },
      { lastSeenAt: new Date() },
      { upsert: true, new: true }
    );

    return new Response(JSON.stringify({ message: "Last seen updated" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating last seen:", error);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
    });
  }
}
