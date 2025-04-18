import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
import { TasksRouter } from "./routers/task.js";
import { userRouter } from "./routers/user.js";
app.use(express.json());
app.use(cors());

app.use("/task", TasksRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Slm 3likom choway za3im rgaya");
});
app.listen(5000, "172.20.10.3", () => {
  console.log("Server is running on PORT 5000");
});
mongoose.connect("").then(() => {
  console.log("Connected to DB");
});
