import axios from "axios";

import { connectDB }
from "../config/db.js";

import { monitorService }
from "../modules/monitor/service.js";
import { checkResultService }
from "../modules/check-result/service.js";

async function run() {
  await connectDB();

  const monitors =
    await monitorService.getAllMonitors();

  console.log(
    `Found ${monitors.length} monitors`
  );

  for (const monitor of monitors) {
    const start = Date.now();

    try {
      const response =
        await axios.get(
          monitor.url
        );

      const responseTime =
        Date.now() - start;
            await checkResultService.create({
  monitorId: monitor._id,
  statusCode: response.status,
  responseTime,
  isUp: true,
});

console.log({
  name: monitor.name,
  statusCode: response.status,
  responseTime,
  saved: true,
});
    } catch (error) {
      await checkResultService.create({
  monitorId: monitor._id,
  statusCode: 0,
  responseTime: 0,
  isUp: false,
});

console.log({
  name: monitor.name,
  error: error.message,
  saved: true,
});
    }
  }

  process.exit(0);
}

run();