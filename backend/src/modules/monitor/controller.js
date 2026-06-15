import { monitorService }
from "./service.js";
import { checkResultService }
from "../check-result/service.js";

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

export async function updateMonitor(
  req,
  res
) {
  try {
    const monitor =
      await monitorService.update(
        req.params.id,
        req.user.userId,
        req.body
      );

    res.json({
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

export async function deleteMonitor(
  req,
  res
) {
  try {
    await monitorService.delete(
      req.params.id,
      req.user.userId
    );

    res.json({
      success: true,
      message: "Monitor deleted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
  

}

export async function getMonitorResults(
  req,
  res
) {
  try {
    const results =
      await checkResultService.getByMonitor(
        req.params.id
      );

    res.json({
      success: true,
      data: results,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}   