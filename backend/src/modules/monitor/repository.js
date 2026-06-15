import { Monitor } from "./model.js";

export const monitorRepository = {
  create(data) {
    return Monitor.create(data);
  },

  findByUser(userId) {
    return Monitor.find({
      userId,
    });
  },
};