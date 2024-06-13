import express from "express";
import {
  createTask,
  deleteTask,
  doingTask,
  getAllDoingTask,
  getAllTask,
  getByIdTask,
  updateTask,
} from "../controller/TaskController";

const router = express.Router();

router
  .get("/Task", getAllTask)
  .get("/Task/:id", getByIdTask)
  .post("/Task", createTask)
  .put("/Task/:id", updateTask)
  .delete("/Task/:id", deleteTask)
  .post("/doingTask/:id", doingTask)
  .get("/getAllDoinTask", getAllDoingTask);

export default router;
