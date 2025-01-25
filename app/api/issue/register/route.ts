import { connectToDatabase } from "@/lib/mongodb";
import NewIssue from "@/models/NewIssue";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  await connectToDatabase();

  try {
    const body = await req.json();

    const {
      userId,
      firstName,
      lastName,
      issue,
      description,
      progress,
      completed,
    } = body;

    if (!userId || !firstName || !lastName || !issue || !description) {
      return new Response(
        JSON.stringify({ message: "All issue fields are required." }),
        { status: 400 }
      );
    }

    const newIssue = new NewIssue({
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      issue: issue,
      description: description,
      progress: progress,
      completed: completed,
    });

    await newIssue.save();

    return new Response(
      JSON.stringify({
        message: "New issue added",
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving issue:", error);
    return new Response(
      JSON.stringify({
        message: "Internal server error, couldn't create user issue",
        error,
      }),
      {
        status: 500,
      }
    );
  }
}
