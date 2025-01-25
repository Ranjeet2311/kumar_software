import mongoose, { Document, Schema } from "mongoose";

export interface INewIssue extends Document {
  userId: string;
  firstName: string;
  lastName: string;
  issue: string;
  description: string;
  progress?: boolean;
  completed?: boolean;
}

const newIssueSchema: Schema = new Schema<INewIssue>(
  {
    userId: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    issue: { type: String, required: true },
    description: { type: String, required: true },
    progress: { type: Boolean, default: false },
    completed: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const NewIssue =
  mongoose.models.NewIssue ||
  mongoose.model<INewIssue>("NewIssue", newIssueSchema);

export default NewIssue;
