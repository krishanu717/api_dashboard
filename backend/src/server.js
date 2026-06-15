import app from "./app.js";
import { connectDB } from "./config/db.js";
import "./jobs/monitor.job.js";

const PORT = process.env.PORT || 3000;

async function start() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
}

start();