import { CheckResult } from "./model.js";

export const checkResultRepository = {
  async getAnalytics(monitorId) {
    const results = await CheckResult.find({
      monitorId,
    });

    const totalChecks = results.length;

    const successfulChecks = results.filter((r) => r.isUp).length;

    const failedChecks = totalChecks - successfulChecks;

    const uptime =
      totalChecks === 0
        ? 0
        : ((successfulChecks / totalChecks) * 100).toFixed(2);

    const avgResponseTime =
      totalChecks === 0
        ? 0
        : Math.round(
            results.reduce((sum, r) => sum + r.responseTime, 0) /
              totalChecks
          );

    return {
      uptime,
      avgResponseTime,
      totalChecks,
      successfulChecks,
      failedChecks,
    };
  },

  create(data) {
    return CheckResult.create(data);
  },

  findByMonitor(monitorId) {
    return CheckResult.find({
      monitorId,
    }).sort({
      createdAt: -1,
    });
  },

  getByMonitor(monitorId) {
    return this.findByMonitor(monitorId);
  },
};