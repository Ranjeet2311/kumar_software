import mongoose, { Schema } from "mongoose";

export interface IContact extends Document {
  firstName: string;
  lastName: string;
  contact: string;
  email: string;
  subject: string;
  description: string;
}

const contactSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    contact: { type: Number, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ContactModel =
  mongoose.models.ContactForm ||
  mongoose.model<IContact>("ContactForm", contactSchema);
export default ContactModel;
