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
  async update(id, userId, data) {
  const monitor =
    await monitorRepository.findById(id);

  if (!monitor) {
    throw new Error("Monitor not found");
  }

  if (
    monitor.userId.toString() !== userId
  ) {
    throw new Error("Unauthorized");
  }

  return monitorRepository.update(
    id,
    data
  );
},

async delete(id, userId) {
  const monitor =
    await monitorRepository.findById(id);

  if (!monitor) {
    throw new Error("Monitor not found");
  }

  if (
    monitor.userId.toString() !== userId
  ) {
    throw new Error("Unauthorized");
  }

  return monitorRepository.delete(id);
},
getAllMonitors() {
  return monitorRepository.findAll();
},
};