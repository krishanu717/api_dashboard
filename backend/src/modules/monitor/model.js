import mongoose from "mongoose";

const monitorSchema = new mongoose.Schema(
  {
    name: String,
    url: String,
    method: {
      type: String,
      default: "GET",
    },
    expectedStatus: {
      type: Number,
      default: 200,
    },
    interval: {
      type: Number,
      default: 60,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Monitor =
  mongoose.model(
    "Monitor",
    monitorSchema
  );