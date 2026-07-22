import mongoose, { Document, Schema } from "mongoose";

export interface IDemoBooking extends Document {
  studentName: string;
  parentName: string;
  phone: string;
  email: string;
  grade: string;
  subject: string;
  mode: "Online" | "Offline" | "Hybrid";
  message?: string;
  createdAt: Date;
  updatedAt: Date;
}

const demoBookingSchema = new Schema<IDemoBooking>(
  {
    studentName: {
      type: String,
      required: true,
      trim: true,
    },

    parentName: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    grade: {
      type: String,
      required: true,
    },

    subject: {
      type: String,
      required: true,
    },

    mode: {
      type: String,
      enum: ["Online", "Offline", "Hybrid"],
      required: true,
    },

    message: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const DemoBooking = mongoose.model<IDemoBooking>(
  "DemoBooking",
  demoBookingSchema,
);

export default DemoBooking;
