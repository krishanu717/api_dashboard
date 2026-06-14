import bcrypt from "bcrypt";
import { authRepository } from "./repository.js";
import jwt from "jsonwebtoken";
export const authService = {
  async register(data) {

    const existing =
      await authRepository.findByEmail(
        data.email
      );

    if (existing) {
      throw new Error(
        "Email already exists"
      );
    }

    const hashedPassword =
      await bcrypt.hash(
        data.password,
        10
      );

    return authRepository.create({
      ...data,
      password: hashedPassword,
    });
  },
  //log in
  async login(email, password) {
  const user =
    await authRepository.findByEmail(email);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const match =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!match) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    {
      userId: user._id
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d"
    }
  );

  return { token };
},
async me(userId) {
  const user =
    await authRepository.findById(
      userId
    );

  return user;
}

};