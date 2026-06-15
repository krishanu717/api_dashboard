import { CheckResult }
from "./model.js";

export const checkResultRepository = {
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
  return checkResultRepository.findByMonitor(
    monitorId
  );
},
};