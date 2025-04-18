import express from "express";
import {
  createUserRegister,
  getProfile,
  login,
  updateProfile,
} from "../controllers/user.js";
import { auth } from "../middlewares/auth.js";
export const userRouter = express.Router();
userRouter.post("/register", createUserRegister);
userRouter.post("/login", login);
userRouter.post("/profile", auth, getProfile);
userRouter.put("/update", updateProfile);
