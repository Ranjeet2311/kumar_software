import mongoose, { Schema, Document } from "mongoose";

type Chat = {
  sender: string;
  message: string;
  timestamps: Date;
};

export interface IUserChat extends Document {
  userId: string;
  userName: string;
  userType: string;
  chatlist: Chat[];
}

const chatSchema: Schema = new Schema(
  {
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    userType: { type: String, required: true },
    chatlist: [
      {
        sender: { type: String, required: true },
        message: { type: String, required: true },
        timestamps: { type: Date, default: Date.now, required: true },
      },
    ],
  },
  { timestamps: true }
);

const ChatModel =
  mongoose.models.Chat || mongoose.model<IUserChat>("Chat", chatSchema);
export default ChatModel;
