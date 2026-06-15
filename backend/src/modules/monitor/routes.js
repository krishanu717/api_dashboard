import { Router } from "express";

import {
  createMonitor,
  getMonitors,
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

export default router;
