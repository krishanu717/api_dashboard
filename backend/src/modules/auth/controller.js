import { authService } from "./service.js";

export async function register(req, res) {
  try {
    const user = await authService.register(req.body);

    const { password, ...safeUser } =
      user.toObject();

    res.status(201).json({
      success: true,
      data: safeUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

export async function login(req, res) {
  try {
    const result = await authService.login(
      req.body.email,
      req.body.password
    );

    res.json(result);
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
}

export async function me(req, res) {
  try {
    const user = await authService.me(
      req.user.userId
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const { password, ...safeUser } =
      user.toObject();

    res.json({
      success: true,
      data: safeUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }

}