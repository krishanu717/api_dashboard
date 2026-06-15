import mongoose from "mongoose";

const checkResultSchema =
  new mongoose.Schema(
    {
      monitorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Monitor",
        required: true,
      },

      statusCode: {
        type: Number,
        required: true,
      },

      responseTime: {
        type: Number,
        required: true,
      },

      isUp: {
        type: Boolean,
        required: true,
      },

      checkedAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      timestamps: true,
    }
  );

export const CheckResult =
  mongoose.model(
    "CheckResult",
    checkResultSchema
  );
  