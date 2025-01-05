import mongoose, { Schema } from "mongoose";

export interface Iauth extends Document {
  firstName: string;
  lastName: string;
  contact: string;
  email: string;
  password: string;
}

const authSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    contact: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Authentication =
  mongoose.models.Auth || mongoose.model<Iauth>("Auth", authSchema);
export default Authentication;
