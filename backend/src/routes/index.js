import { Router } from "express";

import authRoutes from "../modules/auth/routes.js";
import monitorRoutes from "../modules/monitor/routes.js";

const router = Router();

router.use("/auth", authRoutes);

router.use("/monitors", monitorRoutes);

export default router;