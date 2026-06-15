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
  findById(id) {
  return Monitor.findById(id);
},

update(id, data) {
  return Monitor.findByIdAndUpdate(
    id,
    data,
    { new: true }
  );
},

delete(id) {
  return Monitor.findByIdAndDelete(id);
},
findAll() {
  return Monitor.find();
},
};