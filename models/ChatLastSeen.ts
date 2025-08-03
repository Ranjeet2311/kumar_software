// models/ChatLastSeen.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IChatLastSeen extends Document {
  userId: string; // person who is reading the chat (admin or user)
  chatId: string; // the chat they are reading
  lastSeenAt: Date;
}

const chatLastSeenSchema: Schema = new Schema(
  {
    userId: { type: String, required: true },
    chatId: { type: String, required: true },
    lastSeenAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.ChatLastSeen ||
  mongoose.model<IChatLastSeen>("ChatLastSeen", chatLastSeenSchema);
