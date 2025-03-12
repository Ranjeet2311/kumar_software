import { connectToDatabase } from "@/lib/mongodb";
import NewIssue from "@/models/NewIssue";
import mongoose from "mongoose";
import { NextRequest } from "next/server";

export async function PATCH(req: NextRequest) {
  await connectToDatabase();

  try {
    const body = await req.json();
    const { issueId, tag } = body;
    console.log(`body in update issue route : `, body);

    if (!mongoose.Types.ObjectId.isValid(issueId)) {
      return new Response(
        JSON.stringify({ message: "Select an issue to update" }),
        { status: 400 }
      );
    }

    const updateField: Partial<{ progress: boolean; completed: boolean }> = {};
    //Partial<> utility type allows the object to have zero or more of the specified properties.

    if (tag === "inProgress") {
      updateField.progress = true;
      updateField.completed = false;
    } else if (tag === "completed") {
      updateField.progress = true;
      updateField.completed = true;
    } else {
      return new Response(JSON.stringify({ message: "Invalid status" }), {
        status: 400,
      });
    }

    const updateIssue = await NewIssue.findByIdAndUpdate(
      issueId,
      { ...updateField },
      { new: true } // Returns updated document
    );
    console.log(`updateIssue : `, updateIssue);

    if (!updateIssue) {
      return new Response(JSON.stringify({ message: "Issue not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({
        message: "Issue status updated successfully",
        data: updateIssue,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(`error in update issue route : `, error);
    return new Response(
      JSON.stringify({ message: "Server error while updating issue status" }),
      { status: 500 }
    );
  }
}
