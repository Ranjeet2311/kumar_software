import { connectToDatabase } from "@/lib/mongodb";
import ChatModel from "@/models/Chat";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import mongoose from "mongoose";

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

type Chat = {
  sender: "admin" | "user";
  message: string;
  timestamps: Date;
};

type UserChat = {
  userId: string;
  userName: string;
  chatlist: Chat[];
};

export async function POST(req: NextRequest) {
  await connectToDatabase();

  try {
    const body = await req.json();
    const { userId, firstName, lastName, position, textMessage } = body;

    if (!textMessage) {
      return new Response(
        JSON.stringify({
          message: "Please add your, message and send again",
        }),
        { status: 400 }
      );
    }

    const findUser = await ChatModel.findOne({ userId: userId });

    if (findUser) {
      findUser.chatlist.push({
        sender: position || "user",
        message: textMessage,
        timestamps: new Date(),
      });

      await findUser.save();
    } else {
      const userType = position || "user";
      const newMessage = new ChatModel({
        userId: userId,
        userName: firstName + " " + lastName,
        userType: userType,
        chatlist: [
          {
            sender: position || "user",
            message: textMessage,
            timestamps: new Date(),
          },
        ],
      });

      await newMessage.save();
    }

    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving message:", error);

    return new Response(
      JSON.stringify({
        message: "Internal server error, couldn't save your message",
        error,
      }),
      { status: 500 }
    );
  }
}
