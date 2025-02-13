import mongoose, { Schema } from "mongoose";
import { unique } from "next/dist/build/utils";

export interface IAuth extends Document {
  firstName: string;
  lastName: string;
  contact: string;
  email: string;
  password: string;
  position: "admin" | "user";
}

const authSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    position: { type: String, enum: ["admin", "user"], required: false },
  },
  {
    timestamps: true,
  }
);

const Authentication =
  mongoose.models.Auth || mongoose.model<IAuth>("Auth", authSchema);
export default Authentication;
