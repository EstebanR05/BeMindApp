import express from "express";
import { TaskController } from "../controller/TaskController";

const router = express.Router();
const task = new TaskController();

router
  .get("/Task", task.getAllTask)
  .get("/Task/:id", task.getByIdTask)
  .post(
    "/Task/:name/:img/:area/:startDate/:endDate/:comentary/:studentCode",
    task.createTask
  )
  .put(
    "/Task/:id/:name/:img/:area/:startDate/:endDate/:comentary/:studentCode",
    task.updateTask
  )
  .delete("/Task/:id", task.deleteTask);

export default router;
