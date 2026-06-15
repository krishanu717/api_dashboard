import cron from "node-cron";
import { runChecks }
from "../workers/monitor.worker.js";

cron.schedule("* * * * *", async () => {
  console.log(
    "Running monitor checks..."
  );

  await runChecks();
});