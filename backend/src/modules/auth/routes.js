import {
  register,
  login,
  me,
} from "./controller.js";

import {
  authMiddleware,
} from "../../middlewares/auth.middleware.js";

import { Router } from "express";
const router = Router();

router.post(
  "/register",
  register
);

router.post(
  "/login",
  login
);

router.get(
  "/me",
  authMiddleware,
  me
);

router.get("/ping", (req, res) => {
  res.json({
    success: true,
    route: "auth",
  });
});
export default router;