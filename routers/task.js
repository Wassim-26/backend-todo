import express from "express";
import {
  createTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from "../controllers/task.js";
import { auth } from "../middlewares/auth.js";

export const TasksRouter = express.Router();

TasksRouter.get("/", auth, getTasks);
TasksRouter.post("/", auth, createTask);
TasksRouter.get("/:id", auth, getTaskById);
TasksRouter.put("/:id", auth, updateTask);
TasksRouter.delete("/:id", auth, deleteTask);
