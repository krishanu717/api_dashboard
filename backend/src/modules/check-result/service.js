import { checkResultRepository }
from "./repository.js";

export const checkResultService = {
  create(data) {
    return checkResultRepository.create(
      data
    );
  },

  getByMonitor(monitorId) {
    return checkResultRepository.findByMonitor(
      monitorId
    );
  },
};