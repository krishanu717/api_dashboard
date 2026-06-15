import { Router } from "express";
import {
  createMonitor,
  getMonitors,
  updateMonitor,
  deleteMonitor,
  getMonitorResults,
  getMonitorAnalytics,
} from "./controller.js";
import {
  authMiddleware,
} from "../../middlewares/auth.middleware.js";

const router = Router();

router.post(
  "/",
  authMiddleware,
  createMonitor
);

router.get(
  "/",
  authMiddleware,
  getMonitors
);

router.get("/ping", (req, res) => {
  res.json({
    module: "monitor",
  });
});
router.patch(
  "/:id",
  authMiddleware,
  updateMonitor
);

router.delete(
  "/:id",
  authMiddleware,
  deleteMonitor
);
router.get(
  "/:id/results",
  authMiddleware,
  getMonitorResults
);
router.get(
  "/:id/analytics",
  authMiddleware,
  getMonitorAnalytics
);

export default router;
