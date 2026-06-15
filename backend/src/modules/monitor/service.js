import { monitorRepository }
from "./repository.js";

export const monitorService = {
  create(data) {
    return monitorRepository.create(
      data
    );
  },

  getAll(userId) {
    return monitorRepository.findByUser(
      userId
    );
  },
};