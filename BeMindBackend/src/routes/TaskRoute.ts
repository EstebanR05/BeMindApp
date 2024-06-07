import express from "express";
import { TaskController } from "../controller/TaskController";

const router = express.Router();
const task = new TaskController();

router
.get("/Task", task.getAllTask)
.get("Task/:id", task.getByIdTask);

export default router;