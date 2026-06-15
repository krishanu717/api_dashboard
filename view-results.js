import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import { CheckResult }
from "./backend/src/modules/check-result/model.js";

await mongoose.connect(
  process.env.MONGO_URI
);

const results =
  await CheckResult.find();

console.log(results);

process.exit(0);