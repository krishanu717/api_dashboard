import { monitorService }
from "./service.js";

export async function createMonitor(
  req,
  res
) {
  try {
    const monitor =
      await monitorService.create({
        ...req.body,
        userId: req.user.userId,
      });

    res.status(201).json({
      success: true,
      data: monitor,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

export async function getMonitors(
  req,
  res
) {
  const monitors =
    await monitorService.getAll(
      req.user.userId
    );

  res.json({
    success: true,
    data: monitors,
  });
}