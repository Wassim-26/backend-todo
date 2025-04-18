import express from "express";
import {
  createTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from "../controllers/Task.js";

export const TasksRouter = express.Router();

TasksRouter.get("/", getTasks);
TasksRouter.post("/", createTask);
TasksRouter.get("/:id", getTaskById);
TasksRouter.put("/:id", updateTask);
TasksRouter.delete("/:id", deleteTask);
